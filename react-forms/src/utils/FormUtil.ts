import { FormErrors } from "../components/form/Form";

class FormUtil {

    public isValidForm(errors: FormErrors): boolean {
         if(errors.name || errors.surname || errors.gender || errors.country 
            || errors.birthday || errors.agree) return false;
         else return true;
    }

    public validForm(name: string, surname: string, birthday: string, country: string, agree: boolean, gender: string): FormErrors {
       const errors: FormErrors = {
           name: this.validName(name),
           surname: this.validSurname(surname),
           country: this.validCountry(country),
           birthday: this.validBirthday(birthday),
           gender: this.validGender(gender),
           agree: !agree,
       }  
       return errors;
    }

    public cleanForm = (): void => {
        const checkbox = document.getElementById('form-checkbox') as HTMLInputElement;
        checkbox.checked = false;
        const femaleRadio = document.getElementById('form-radio-female') as HTMLInputElement;
        const maleRadio = document.getElementById('form-radio-male') as HTMLInputElement;
        const otherRadio = document.getElementById('form-radio-other') as HTMLInputElement;
        femaleRadio.checked = false;
        maleRadio.checked = false;
        otherRadio.checked = false;
        const formSelect = document.getElementById('form-select') as HTMLSelectElement;
        formSelect.selectedIndex = 0;
    } 

    private validName = (name: string): boolean => {
        return name.length > 3?  false :  true;
    }

    private validSurname = (surname: string): boolean => {
        return surname.length > 3?  false :  true;
    }

    private validBirthday = (birthday: string): boolean => {
        return birthday.length > 9?  false :  true;
    }

    private validCountry = (country: string): boolean => {
        return country.length > 1?  false :  true;
    }

    private validGender = (gender: string): boolean => {
        return gender.length > 3?  false :  true;
    }
}

export const formUtil = new FormUtil();