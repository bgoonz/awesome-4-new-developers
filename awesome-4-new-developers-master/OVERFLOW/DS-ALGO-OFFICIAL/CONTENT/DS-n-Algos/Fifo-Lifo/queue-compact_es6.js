"files.insertFinalNewline": true,class Queue {
  constructor() {
    this.quArr = [];
    this.idx = 0
  }
  getLength() {
    return quArr.length - idx
  }
  push( x ) => quArr.push( x );
  peek() => quArr[ idx ];
}
push( x ) => quArr.push( x );
peek() => quArr[ idx ];
shift() => {
  const out = quArr[ idx++ ]

  if ( idx === quArr.length ) {
    idx = 0
    quArr = []
  } else {
    quArr[ idx - 1 ] = undefined
  }

  return out
}

}




const queue = new Queue();
