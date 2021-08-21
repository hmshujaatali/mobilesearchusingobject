
var mobilePhones = {
    iphone: {
        iphonex: {
            brand: "Iphone",
            model: "Iphone X",
            price: "150000 PKR",
            color: "Gray,Black & White",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front (Full Hd Dslar Wala)",
            src: "1.jpg"
        },
        iphone11: {
            brand: "Iphone",
            model: "Iphone 11",
            price: "200000 PKR",
            color: "Gray,Black & White & Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256, 12 & 512",
            camera: "16px Back, And 6px Front (Full Hd Dslar Wala)",
            src: "2.jpg"
        },
        iphone12: {
            brand: "Iphone",
            model: "Iphone 12",
            price: "250000 PKR",
            color: "Gray,Black & White & Crystal & New Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "20px Back, And 8px Front (Full Hd Dslar Wala)",
            src: "3.jpg"
        }
    },
    samsung: {
        s8: {
            brand: "Samsung",
            model: "Samsung Galaxy S8",
            price: "70000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "4.jpg"
        },
        s9: {
            brand: "Samsung",
            model: "Samsung Galaxy S9",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "5.jpg"
        },
        s10: {
            brand: "Samsung",
            model: "Samsung Galaxy S10",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "6.jpg"
        }
    },
    oppo: {
        f8: {
            brand: "Oppo",
            model: "Oppo F8",
            price: "50000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "7.jpg"
        },
        f9: {
            brand: "Oppo",
            model: "Oppo F9",
            price: "75000 PKR",
            color: "Golden & White",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "8.jpg"
        },
        f10: {
            brand: "Oppo",
            model: "Oppo F10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "9.jpg"
        }
    },
    infinix: {
        hot8: {
            brand: "Infinix",
            model: "Infinix Hote 8",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "10.jpg"
        },
        hot9: {
            brand: "Infinix",
            model: "Infinix Hote 9",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "11.jpg"
        },
        hot10: {
            brand: "Infinix",
            model: "Infinix Hote 10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "12.jpg"
        }
    },
    poco: {
        pocox3: {
            brand: "Poco",
            model: "Poco X3",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "13.jpg"
        },
        Poco8c: {
            brand: "Poco",
            model: "Poco 8C",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "14.jpg"
        }
    }
}
var brandInput = document.getElementById("brands")
var modelInput = document.getElementById("models")

var phones = document.getElementById("phones");

for (var key in mobilePhones) {
    var brands = document.getElementById("brands");
    var option = document.createElement("option");
    var optionText = document.createTextNode(key)
    option.appendChild(optionText)
    brands.appendChild(option)
    for (var key1 in mobilePhones[key]) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("width", "300")
        img.setAttribute("src", "1.jpg")
        var h4 = document.createElement("h4");
        var h4Text = document.createTextNode(mobilePhones[key][key1].model)
        h4.appendChild(h4Text)
        div.appendChild(img)
        div.appendChild(h4)
        phones.appendChild(div)

    }
}




function search() {
    var brand = brandInput.value.toLowerCase()
    var model = modelInput.value.toLowerCase()
    if (brand && model) {
        phones.innerHTML = ""
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("width", "300")
        img.setAttribute("src", "1.jpg")
        var h4 = document.createElement("h4");
        var h4Text = document.createTextNode(mobilePhones[brand][model].model)
        var h41 = document.createElement("h4");
        var h4Text1 = document.createTextNode(mobilePhones[brand][model].camera)
        h41.appendChild(h4Text1)
        h4.appendChild(h4Text)
        div.appendChild(img)
        div.appendChild(h4)
        div.appendChild(h41)
        phones.appendChild(div)
    }
    else if (brand) {
        phones.innerHTML = ""
        for (var key in mobilePhones[brand]) {
            var div = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute("width", "300")
            img.setAttribute("src", "1.jpg")
            var h4 = document.createElement("h4");
            var h4Text = document.createTextNode(mobilePhones[brand][key].model)
            h4.appendChild(h4Text)
            div.appendChild(img)
            div.appendChild(h4)
            phones.appendChild(div)

        }
    } else {

    }



}

function setValue(e) {
    // console.log(e.value)
    var models = document.getElementById("models");
    models.innerHTML = ""
    var option1 = document.createElement("option");
    option1.setAttribute("value","")
    var optionText1 = document.createTextNode("Select Model")
    option1.appendChild(optionText1)
    models.appendChild(option1)
    for (var key in mobilePhones[e.value]) {
        var option = document.createElement("option");
        var optionText = document.createTextNode(key)
        option.appendChild(optionText)
        models.appendChild(option)
    }
}



















