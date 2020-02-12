import { renderHook, act } from '@testing-library/react-hooks';
import useGoogleBooksApi from './useGoogleBooksApi';

test('should use GoogleBooksApi default value and state', () => {
  const { result } = renderHook(() => useGoogleBooksApi());
  const {state, url } = result.current;
  const { isLoading, isError, data } = state;
  
  expect(url).toBe('');

  expect(isLoading).toBe(false);
  expect(isError).toBe(false);
  expect(data).toBe(null);
});

test('should use GoogleBooksApi with set url', () => {
  const { result } = renderHook(() => useGoogleBooksApi('/url'));

  act(() => {
    result.current.setUrl('/url')
  });
  
  expect(result.current.url).toBe('/url');
});