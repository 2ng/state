# @2ng/state

Простой angular-way стейт менеджер. Не заменяет стандартный подход по хранению и изменению состояния приложения через сервисы, а пробует сделать это чуть проще. 

Подход не новый, очень распространен, есть много видео и статей. Автор - дилетант 🙂

## Термины

`state` - состояние. Это всегда объект, ключи которого строки, значение - что угодно.

`actions` - методы, которые меняют `state`. Изменение `state` только через `actions`.   

`store` - хранилище. Содержит `state` и его `actions`.

В контексте ангуляра будем пониимать `store` - это сервис, `actions` - методы этого сервиса.

## NgState API

Ниже под ```T``` подразумевается тип объекта ```state```.  

### state

```ts
public state = {
  get(): T;
  changes<K>(keyOrFn?: keyof T | ((state: T) => K)) => Observable<K>
 }
```
это свойство, которое содержит объект с двумя методами:

```
  get(): T;
```
метод, вызывается без параметров, возвращает текущее состояние.

```ts
  changes<K>(keyOrFn?: keyof T | ((state: T) => K)) => Observable<K>
```
метод, параметр которого может быть:
1. строка - ключ объекта `state`
1. функция, которая принимает параметр ```state``` и возвращает объект. Работает как обычная функция ```map``` у массива. С помощью нее мы можем смаппить / собрать различные части ```state``` в один объект например.
1. без параметра - в этом случае метод вернет весь объект ```state```

Возвращает данный метод ```Observable ```, на который мы можем подписаться и получать изменения ```state```. Причем лететь будут данные только тогда, когда данные действительно изменились (см. подробнее).

### setState

```ts
  protected setState = (partialState: Partial<T>): void
```
метод, принимает часть ```state``` и сетает её в ```state```. Метод ```protected``` для того, чтобы доступ к нему был только в сервисе, который ```extends NgState```. Будем вызывать его только в методах (```actions```, как мы договорились) этого сервиса

### isEqualFn
```ts
static isEqualFn: (a: any, b: any) => boolean = isEqual;
```
в методе ```changes```, для того, чтобы исключить повторные эмиты одинаковых значенй используется rxjs оператор ```distinctUntilChanged```. Работает он так, берет два значения, предыдущее и текущее и сравнивает их строгим равенством. Если они равны, текущее значние не летит дальше, если не равны - летит. 

Строгое равенство подходит для примитивов, но не подходит для объектов. В нашем случае в ```state``` может лежать что угодно. 

В ```distinctUntilchanged``` можно передать свою функцию сравнения, я использую эту - [```@2utils/is-equal```](https://github.com/2utils/is-equal). Она работает с примитивами, объектами, в том числе с ```Date```, ```Map```, ```Set```, и показывает неплохие результаты :).

Для переопределения данной функции, если например хочется использовать ```lodash.isEqual```, используйте статический метод ```NgState.isEqualFn```.

```TODO(andrey)```: возможно стоит убрать функцию по умолчанию, если мы ее переопределим, стандартная все равно попадет в бандл. Или нет? Или убрать возможность переопределения.

## Использование

Например мы хотим хранить состояние страницы, у которой есть таблица с данными, которые приходят с сервера. Причем при загрузке нужно показать лоадер, при ошибке заглушку. Таблица сначала отображается в компактном виде, но у неё  есть кнопка, которая раскрывает ее на весь экран.

1. Для удобства я создаю файл сервиса с названием ```*.store.ts``` и кладу его в корневую папку модуля/компонента, где использую. В названии класса использую суффикс *Store*.

```page.store.ts```

```ts
import { Injectable } from '@angular/core';

@Injectable()
export class PageStore {}
```

2. Определяю тип интерфейса ```state```. Добавляю к классу ```extends NgState``` в дженерике указываю интерфейс.


```page.store.ts```

```ts
import { Injectable } from '@angular/core';
import { NgState } from '@2ng/state';

export interface PageState {
  data: any[], // массив данных от сервера
  loadingStatus: 'idle' | 'pending' | 'success' | 'error', // статусы для показа лоадера, ошибки
  isOpen: boolean // флаг, который переключает размер таблицы
}

@Injectable()
export class PageStore extends NgState<PageState> {}
```

3. Описываю начальное состояние и передаю его как параметр в ```super```.

```page.store.ts```

```ts
import { Injectable } from '@angular/core';
import { NgState } from '@2ng/state';

export interface PageState {
  data: any[],
  loadingStatus: 'idle' | 'pending' | 'success' | 'error',
  isOpen: boolean
}

const initialState: PageState = {
  data: [],
  loadingStatus: 'idle',
  isOpen: false
}

@Injectable()
export class PageStore extends NgState<PageState> {
  constructor() {
    super(initialState)
  }
}
```

4. Теперь нам для реализации переключения размеров таблицы, нужно подписаться в компоненте на изменения поля ```isOpen```

```page.component.ts```

```ts
...
@Component({...})
export class PageComponent {
  isOpen$ = this.store.state.changes('isOpen');
  
  constructor(private store: PageStore) {}  
}
```

Примечание: 
```ts
  // Когда нужно следить за большим кол-вом свойст, для удобства делаю так:
  private changes = this.store.state.changes;
  
  isOpen$ = this.changes('isOpen');
  someData$ = this.changes(state => state.some.data); // и т.д
```

5. В сторе создаем метод, который будет переключать ```isOpen```

```page.store.ts```

```ts
...

@Injectable()
export class PageStore extends NgState<PageState> {
  constructor() {
    super(initialState)
  }
  
  toggle() {
    const { state, setState } = this;
    
    setState({
      isOpen: !state.get().isOpen
    });
  }
}
```

6. Добавим загрузку данных

```page.store.ts```

```ts

...

@Injectable()
export class PageStore extends NgState<PageState> {
  constructor(private _http: HttpClient) {
    super(initialState)
  }
  
  toggle() {
    const { state, setState } = this;
    
    setState({
      isOpen: !state.get().isOpen
    });
  }
  
  getData() {
    const { state, setState } = this;
    
    setState({ loadingStatus: 'pending' }); // меняем статус до загрузки
    
    this._http.get('http://im-tired-of-writing-this.com').subscribe(
      response => {
        setState({
          loadingStatus: 'success', // меняем статус на успешно
          data: response // сетаем дату
        });
      },
      error => {
        setState({
          loadingStatus: 'error' // меняем статус на ошибку
        });
      }
    );
  }
}

```
7. Подпишемся на ```loadingStatus``` и ```data``` в компоненте.

```page.component.ts```

```ts
...
@Component({...})
export class PageComponent {
  isOpen$ = this.store.state.changes('isOpen');
  loadingStatus$ = this.store.state.changes(state => state.loadingStatus); // для примера, как можно использовать эту функцию
  data$ = this.store.state.changes('data');
  
  constructor(private store: PageStore) {}  
}
```

Наименование через ```$``` соглашение для указания ```Observable```. 

## Феатурес

☝️ Мы только один раз указали интерфейс, а дальше все типы работают автоматически. В ```changes``` нам придет тот тип, который нужен, для ```isOpen``` это будет ```boolean```, для ```loadingStatus``` - ```'idle' | 'pending' | 'success' | 'error' ```.

🤞 Все классы сервисов ```*.store.ts``` выглядят единообразно. Через точку редактор кода нам покажет только одно свойство ```state```, и все методы ```actions```, которые есть у этого стора. Ничего лишнего. Нам не нужно отдельно создавать классы для ```actions```, указывать типы принимаемых аргументов, мы все это указываем в методах класса, как обычно.

🤟 У нас нет кучи ```Subject```, ```BehaviorSubject```, ```ReplaySubject```, ```asObservable()```, сеттеров для вызова ```subject.next()```, геттеров для поление ```subject.value``` и т.д. Все собрано в один объект и удобно извлекается через ```changes```

## Установка
```
npm i @2ng/state
```
