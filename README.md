# open-external-app-using-ionic-3

https://itunes.apple.com/se/app/bankid-s%C3%A4kerhetsapp/id433151512?mt=8 

let url = URL(string: "https://app.bankid.com/?autostarttoken=<INSERT
AUTOSTARTTOKEN HERE>&redirect=<INSERT YOUR LINK HERE>")
UIApplication.shared.open(url!, options: [:]) { (success) in
 // handle success/failure
}
I
