var index = {
    // 1: {
    //   id: 1,
    //   name: 'Foo'
    // },
    // 2: {
    //   id: 2,
    //   name: 'Foo'
    // },
    // 3: {
    //   id: 3,
    //   name: 'Foo'
    // },
    // 4: {
    //   id: 4,
    //   name: 'Foo'
    // },
    // 5: {
    //   id: 5,
    //   name: 'Foo'
    // },
    // 6: {
    //   id: 6,
    //   name: 'Foo'
    // },
  };
  var arr = [
    {
      id: 1,
      name: 'Foo'
    },
    {
      id: 2,
      name: 'Foo'
    },
    {
      id: 3,
      name: 'Foo'
    },
    {
      id: 4,
      name: 'Foo'
    },
    {
      id: 5,
      name: 'Foo'
    },
    {
      id: 6,
      name: 'Foo'
    },
  ];
  
  arr.forEach((el) => {
    index[el.id] = el; // index[1] = { id: 1, name: 'Foo' };
  });
  
  console.log({ arr, index });
  console.log(index[1]);