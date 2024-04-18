export const emailRules = [
    v => !!v || 'Email is required',
    v => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) || 'Enter a valid email address',
   ]

export  const passwordRules = [
    v => !!v || 'Password is required',
    v => (v && v.length >= 8) || 'Password must be at least 8 characters long',
    v => (v && v.length <= 20) || 'Password must be less than 20 characters long',
    v => /[a-z]/.test(v) || 'Password must contain at least one lowercase letter (a-z)',
    v => /[A-Z]/.test(v) || 'Password must contain at least one uppercase letter (A-Z)',
    v => /\d/.test(v) || 'Password must contain at least one number (0-9)',
    v => /[$@#&!]/.test(v) || 'Password must contain at least one special character ($@#&!)'
]

export const firstNameRules= [
    v => !!v || 'First Name is Required !!',
   ]
export const lastNameRules = [
   v => !!v || 'Last Name is Required !!',
   ]


export const inputRules = [v => !!v || "Field is required"];

export const idRules = [
	v => !!v || 'ID number is required',
	v => /^[0-9]+$/.test(v) || 'Only numbers are allowed',
  ];
export const numRules = [
		v => /^[0-9]+$/.test(v) || 'Only numbers are allowed',
		v => !!v || 'Field Cannot be Empty',
]