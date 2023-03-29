import styles from "./input-theme.module.css";

interface InputThemeProps {
  labelName: string;
  placeHolderName: string;
  name: string;
}

export function InputTheme({
  labelName,
  placeHolderName,
  name,
}: InputThemeProps) {
  return (
    <div className={styles.contentInputTheme}>
      <label htmlFor={name} className={styles.labelTheme}>
        {labelName}
      </label>
      <input
        autoComplete="off"
        placeholder={`Exemplo: ${placeHolderName}`}
        className={styles.InputTheme}
        id={name}
        name={name}
        type="text"
        required
      />
    </div>
  );
}
