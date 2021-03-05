const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    email: {
        presence: true,
        email: true,
    },
    career: {
        presence: true,
    },
    telno: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    }
}
const app = Vue.createApp({
    data() {
        return {
            pictureUrl: '/images/IMG_1615.jpg',
            firstname: 'Taninchot',
            lastname: 'Phuwaloertthiwat',
            email: 'Taninchot@Taninchot.com',
            career: 'Full Stack Developer',
            telno: '1234567890',
            form: {
                firstname: null,
                lastname: null,
                email: null,
                career: null,
                telno: null,
            },
            errors: null,
            editProfile: false
        }
    },
    methods: {
        setData() {
            this.firstname = this.form.firstname;
            this.lastname = this.form.lastname;
            this.career = this.form.career;
            this.email = this.form.email;
            this.telno = this.form.telno;
        },
        clearFormData() {
            this.form.firstname = null;
            this.form.lastname = null;
            this.form.career = null;
            this.form.email = null;
            this.form.telno = null;
        },
        checkForm(e) {
            this.errors = validate({
                firstname: this.form.firstname,
                lastname: this.form.lastname,
                career: this.form.career,
                email: this.form.email,
                telno: this.form.telno,
            }, constraints)

            if (this.errors) {
                e.preventDefault();

            } if (this.errors == null) {
                alert('Your profile is updated successfully')
                this.setData();
                this.editProfile = false
                this.clearFormData();
                e.preventDefault();
            }
        }
    },
})
app.mount('#app')