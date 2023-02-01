import {ValidationErrors, AbstractControl, ValidatorFn} from "@angular/forms";


export class RegisterValidators {


  static match(controlName: string, matchingName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName)
      const matchingControl = group.get(matchingName)

      if (!control || !matchingControl) {
        console.log('Form control not be found in the form group')
        return {controlNotFound: false}
      }
      const error = control.value === matchingControl.value ?
        null :
        { noMatch: true }

      matchingControl.setErrors(error)

      return error
    }
  }
}
