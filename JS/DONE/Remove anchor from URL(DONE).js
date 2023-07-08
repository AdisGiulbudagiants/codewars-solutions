function removeUrlAnchor(url) {
  return url.includes("#") ? url.substring(0, url.indexOf("#")) : url
}

console.log(removeUrlAnchor("www.codewars.com#about")) //'www.codewars.com'
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about")) //'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor("www.codewars.com/katas/")) //'www.codewars.com/katas/'
