import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <Formik
      initialValues={{ topic: '' }}
      onSubmit={(values, actions) => {
        if (!values.topic.trim()) {
          toast.error('Please enter a search term');
        } else {
          onSearch(values.topic);
          actions.resetForm();
        }
      }}
    >
      <Form >
        <Field
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images "
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
