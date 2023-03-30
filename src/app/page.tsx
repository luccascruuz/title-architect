"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Title } from "@/components/title";
import { InputTheme } from "@/components/input-theme";
import { ButtonSubmit } from "@/components/button-submit";
import { openaiApi } from "../api/openaiApi";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [titleValue, setTitleValue] = useState<string>();

  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);

    const themeValue = event.target.tema.value;
    const keyWordsValue = event.target.palavrasChave.value;

    try {
      const result = await openaiApi(themeValue, keyWordsValue);
      setIsLoading(false);

      setTitleValue(result);
    } catch (err) {
      setTitleValue("Ocorreu um erro, tente novamente :(");
      setIsLoading(false);
      console.log(err);
    }
  }

  return (
    <>
      <main className={styles.main}>
        <Title />

        <form className={styles.form} onSubmit={handleSubmit}>
          <InputTheme name="tema" labelName="Tema" placeHolderName="Covid-19" />

          <InputTheme
            name="palavrasChave"
            labelName="Palavras-chave"
            placeHolderName="covid, pandemia"
          />

          <ButtonSubmit />
        </form>

        {isLoading ? (
          <p className={styles.loading}>Criando...</p>
        ) : titleValue ? (
          <p className={`${styles.titleAnimation} ${styles.typeAnimation}`}>
            {titleValue}
          </p>
        ) : null}
      </main>
      <Analytics />
    </>
  );
}
