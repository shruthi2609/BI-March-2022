function basicDetails(){//outer
    let fname="john"
    let reg=290382938
    function contactDetails(){//inner
     let mobile=29030293
     console.log(fname,mobile)
    }
    return contactDetails
  
}
let refunction=basicDetails()
console.dir(refunction)

