const shuffle = (list: any[]): any[] => {
  const shuffleList = list
                        .map(content => ({content: content, sort: Math.random()}))
                        .sort((o1, o2) => o1.sort - o2.sort)
                        .map(item => item.content)
  return shuffleList
}

export {
  shuffle
}