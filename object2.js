class Railwayform {
    submit() {
        console.log(this.name + " this form is submitted")
    }
    cancel() {
        console.log(this.name + " this form is cancelled")

    }
    fill(givenname) {
        this.name = givenname
    }
}
let yashForm = new Railwayform()
yashForm.fill("yash")
yashForm.submit();

let yash2Form = new Railwayform()

yash2Form.fill("yash2")
yash2Form.submit();
yash2Form.cancel();

