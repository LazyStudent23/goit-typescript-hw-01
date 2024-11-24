type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">; // витягує все, крім 'errors'

const params: Params = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
}

// type Params = Partial<Omit<Form, "errors">>; // витягує все, крім 'errors'

// const params: Params = {};
