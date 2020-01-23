```
AppModule

@NgModule({
  ....,
  providers: [
    Store,
    { provide: STORE_TOKEN, useValue: COMBINED_STATES },
  ....,
}]
```

```
Component

constructor(private store: Store) {
    this.store.get('count').subscribe(v => console.log(v));
    this.store.get('user').subscribe(v => console.log(v));

    this.store.use('count').dispatch('INC');

    const userState = this.store.use('user').dispatch('UPPERCASE');

    console.log('user value', userState.value)
}
```
