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
  function handleHeigthInput() {
    const inputDoc = document.getElementById(name);

    inputDoc?.addEventListener("input", () => {
      inputDoc.style.height = inputDoc.scrollHeight + "px";
    });
  }
  function addTextShadow() {
    const labelTag = document.getElementById(`${name}${styles.labelTheme}`);
    labelTag!.style.textShadow = "1px 1px 2px gray";
  }
  function removeTextShadow() {
    const labelTag = document.getElementById(`${name}${styles.labelTheme}`);
    labelTag!.style.textShadow = "inherit";
  }
  return (
    <div className={styles.contentInputTheme}>
      <label
        htmlFor={name}
        id={`${name}${styles.labelTheme}`}
        className={styles.labelTheme}
      >
        {labelName}
      </label>
      <textarea
        autoComplete="off"
        placeholder={`Exemplo: ${placeHolderName}`}
        className={styles.InputTheme}
        id={name}
        name={name}
        required
        onBlur={() => removeTextShadow()}
        onFocus={() => {
          handleHeigthInput();
          addTextShadow();
        }}
      />
    </div>
  );
}
