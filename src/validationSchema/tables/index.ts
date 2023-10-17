import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  number: yup.number().integer().nullable(),
  capacity: yup.number().integer().nullable(),
  restaurant_id: yup.string().nullable().required(),
  reservation_id: yup.string().nullable().required(),
});
