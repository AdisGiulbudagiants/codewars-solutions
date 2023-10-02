function domainName(url) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?([^\/]+)/)
  if (match && match.length > 1) {
    const domainParts = match[1].split(".")
    return domainParts.length > 1 ? domainParts[0] : domainParts[0]
  }
}

console.log(domainName("http://github.com/carbonfive/raygun")) //github
console.log(domainName("http://www.zombie-bites.com")) //zombie-bites
console.log(domainName("https://www.cnet.com")) //cnet
