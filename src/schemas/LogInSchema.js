import * as Yup from 'yup'

const LogInSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Password must have at least 6 characters, 1 special character, 1 uppercase letter, and 1 lowercase letter'
    ),
  });

export default LogInSchema;