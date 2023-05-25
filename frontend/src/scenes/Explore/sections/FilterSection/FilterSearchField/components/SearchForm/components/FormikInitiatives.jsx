// from package
import * as Yup from 'yup';


export const searchProductsInitialValues = {
  searchItem: ""
};

export const validationSchema = Yup.object().shape({
  searchItem: Yup.string()
});
