class SmallestIntegerFinder {
  findSmallestInt(args) {
    const res = args.sort((a, b) => a - b)
    return res[0]
  }
}
