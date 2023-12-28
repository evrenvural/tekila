import { useLocalStorage } from "@mantine/hooks";
import isEqual from "lodash/isEqual";

export function useMyLocalStorage(props) {
  const [value, setValue] = useLocalStorage({
    ...props,
  });

  const stringifyValue = localStorage.getItem(props.key);

  const parsedValue = isEqual(value, props.defaultValue)
    ? stringifyValue === null
      ? props.defaultValue
      : JSON.parse(stringifyValue)
    : value;

  return [parsedValue, setValue];
}
