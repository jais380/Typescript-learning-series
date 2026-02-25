// value must be everything from A and B

type Inter1 = {id: string}
type Inter2 = {createdAt: Date}

type Entity = Inter1 & Inter2; //must have both id and createdAt

const e: Entity = {id: 'e1', createdAt: new Date()}


type NumberHolderUnique = {a: number}
type StringHolderUnique = {a: string}

// type NumberStringMix = NumberHolderUnique & NumberStringMix
