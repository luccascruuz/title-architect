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

      console.log(result);
      setTitleValue(result);
    } catch (err) {
      setTitleValue("Ocorreu um erro, tente novamente :(");
      setIsLoading(false);
      console.log(err);
    }
  }

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <main className={styles.main}>
        <Title />

        <form className={styles.form} onSubmit={handleSubmit}>
          <InputTheme
            name="tema"
            labelName="Tema"
            placeHolderName="Estudo sobre casos de covid em pequenas comunidades"
          />
          <InputTheme
            name="palavrasChave"
            labelName="Palavras-chave"
            placeHolderName="covid, pequenas comunidades, pandemia, gripe"
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
