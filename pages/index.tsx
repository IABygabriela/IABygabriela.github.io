import React, { useState, useMemo, useEffect } from "react";
import { Seo } from "../components/Seo";
import { CreateCompletionResponseChoicesInner } from "openai";
import { SectionForm, TextType } from "../components/SectionForm";
import axios from "axios";
import { LanguageDropdown } from "../components/LanguageDropdown";

export default function Home() {
  const [idea, setIdea] = useState({
    topic: "",
    intro: "",
    outro: "",
    headline: "",
    outline: "",
    tone: "",
    section: "",
    keywords: "",
    rewrite: "",
    translate: "",
    extract: "",
  });
  const [loading, setLoading] = useState({
    topic: false,
    intro: false,
    outro: false,
    headline: false,
    outline: false,
    tone: false,
    section: false,
    keywords: false,
    rewrite: false,
    translate: false,
    extract: false,
  });

  const [topics, setTopics] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [intro, setIntro] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [outro, setOutro] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [headlines, setHeadlines] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [outline, setOutline] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [tone, setTone] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [section, setSection] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [keywords, setKeywords] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [rewrite, setRewrite] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [translate, setTranslate] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);
  const [extract, setExtract] = useState<
    CreateCompletionResponseChoicesInner[] | null
  >(null);

  const [language, setLanguage] = useState<string>("English");

  const generateBlogTopics = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      topic: true,
    });
    const response = await axios.post("/api/topics", {
      text: idea.topic,
    });
    setLoading({
      ...loading,
      topic: false,
    });
    setTopics(response.data.result.choices);
  };

  const generateBlogIntro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      intro: true,
    });
    const response = await axios.post("/api/intro", {
      text: idea.intro,
    });

    setLoading({
      ...loading,
      intro: false,
    });
    setIntro(response.data.result.choices);
  };

  const generateBlogOutro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      outro: true,
    });
    const response = await axios.post("/api/outro", {
      text: idea.outro,
    });

    setLoading({
      ...loading,
      outro: false,
    });
    setOutro(response.data.result.choices);
  };

  const generateBlogHeadlines = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      headline: true,
    });
    const response = await axios.post("/api/headlines", {
      text: idea.headline,
    });

    setLoading({
      ...loading,
      headline: false,
    });
    setHeadlines(response.data.result.choices);
  };

  const generateBlogTone = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      tone: true,
    });
    const response = await axios.post("/api/tone", {
      text: idea.tone,
    });

    setLoading({
      ...loading,
      tone: false,
    });
    setTone(response.data.result.choices);
  };

  const generateBlogOutline = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      outline: true,
    });
    const response = await axios.post("/api/outline", {
      text: idea.outline,
    });

    setLoading({
      ...loading,
      outline: false,
    });
    setOutline(response.data.result.choices);
  };

  const generateSectionExpand = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      section: true,
    });
    const response = await axios.post("/api/section", {
      text: idea.section,
    });
    setLoading({
      ...loading,
      section: false,
    });
    setSection(response.data.result.choices);
  };

  const generateSEOKeywords = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      keywords: true,
    });
    const response = await axios.post("/api/keywords", {
      text: idea.keywords,
    });
    setLoading({
      ...loading,
      keywords: false,
    });
    setKeywords(response.data.result.choices);
  };

  const extractKeywords = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      extract: true,
    });
    const response = await axios.post("/api/extract", {
      text: idea.extract,
    });
    setLoading({
      ...loading,
      extract: false,
    });
    setExtract(response.data.result.choices);
  };

  const generateSentenceRewrite = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading({
      ...loading,
      rewrite: true,
    });
    const response = await axios.post("/api/rewrite", {
      text: idea.rewrite,
    });
    setLoading({
      ...loading,
      rewrite: false,
    });
    setRewrite(response.data.result.choices);
  };

  const generateTranslate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({
      ...loading,
      translate: true,
    });
    const response = await axios.post("/api/translate", {
      text: idea.translate,
      language: language,
    });
    setLoading({
      ...loading,
      translate: false,
    });
    setTranslate(response.data.result.choices);
  };

  const blogTopics: string[] | undefined = useMemo(() => {
    if (!topics) return [];
    return topics[0].text?.split("\n").filter((topic) => topic.length > 0);
  }, [topics]);

  const blogOutline: string[] | undefined = useMemo(() => {
    if (!outline) return [];
    return outline[0].text?.split("\n").filter((outline) => outline.length > 0);
  }, [outline]);

  const blogIntro: string[] | undefined = useMemo(() => {
    if (!intro) return [];
    return intro[0].text?.split("\n").filter((intro) => intro.length > 0);
  }, [intro]);

  const blogOutro: string[] | undefined = useMemo(() => {
    if (!outro) return [];
    return outro[0].text?.split("\n").filter((outro) => outro.length > 0);
  }, [outro]);

  const blogSection: string[] | undefined = useMemo(() => {
    if (!section) return [];
    return section[0].text?.split("\n").filter((sec) => sec.length > 0);
  }, [section]);

  const blogKeywords: string[] | undefined = useMemo(() => {
    if (!keywords) return [];
    return keywords[0].text
      ?.split("\n")
      .filter((keyword) => keyword.length > 0);
  }, [keywords]);

  const blogHeadlines: string[] | undefined = useMemo(() => {
    if (!headlines) return [];
    return headlines[0].text
      ?.split("\n")
      .filter((headline) => headline.length > 0);
  }, [headlines]);

  const blogTone: string[] | undefined = useMemo(() => {
    if (!tone) return [];
    return tone[0].text?.split("\n").filter((topic) => topic.length > 0);
  }, [tone]);

  const sentenceRewrite: string[] | undefined = useMemo(() => {
    if (!rewrite) return [];
    return rewrite[0].text
      ?.split("\n")
      .filter((sentence) => sentence.length > 0);
  }, [rewrite]);

  const contentTranslate: string[] | undefined = useMemo(() => {
    if (!translate) return [];
    return translate[0].text
      ?.split("\n")
      .filter((content) => content.length > 0);
  }, [translate]);

  const contentKeywords: string[] | undefined = useMemo(() => {
    if (!extract) return [];
    return extract[0].text
      ?.split("\n")
      .filter((keywords) => keywords.length > 0);
  }, [extract]);
  return (
    <div>
      <Seo />

      <div className="min-h-screen w-full py-10 px-4 md:px-0 bg-white text-black md:flex md:items-center md:justify-center">
        <div className="flex flex-col justify-center items-center md:gap-4">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="m-0 text-6xl font-bold mb-4">
                BlogNLP{" "}
                <span role="img" aria-label="writing-hand">
                  ✍️
                </span>
              </h1>
            </div>

            <p className="w-full text-sm md:w-[650px] mb-5">
              BlogNLP is a free AI blog writing tool that helps you break your
              writer&apos;s block to create original content in a fraction of a
              time. Powered by Open AI&apos;s GPT-3.
            </p>
          </div>
          <main className="flex flex-col w-full md:w-[650px]">
            <SectionForm
              title="Generate blog topic ideas 💡"
              placeholder="Enter a blog topic..."
              value={idea.topic}
              onSubmit={(e) => generateBlogTopics(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  topic: e.target.value,
                })
              }
              isLoading={loading.topic}
              blogText={blogTopics}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Generate a blog outline 📝"
              placeholder="Enter a blog title or topic..."
              value={idea.outline}
              onSubmit={(e) => generateBlogOutline(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  outline: e.target.value,
                })
              }
              isLoading={loading.outline}
              blogText={blogOutline}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Generate a blog intro paragraph ⚡️"
              placeholder="Enter a blog title..."
              value={idea.intro}
              onSubmit={(e) => generateBlogIntro(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  intro: e.target.value,
                })
              }
              isLoading={loading.intro}
              blogText={blogIntro}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Generate a blog outro paragraph 🌗"
              placeholder="Enter a blog title..."
              value={idea.outro}
              onSubmit={(e) => generateBlogOutro(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  outro: e.target.value,
                })
              }
              isLoading={loading.outro}
              blogText={blogOutro}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Detect tone of voice 🎶"
              type={TextType.TEXTAREA}
              placeholder="Enter written content..."
              value={idea.tone}
              onSubmit={(e) => generateBlogTone(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  tone: e.target.value,
                })
              }
              isLoading={loading.tone}
              blogText={blogTone}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Generate headline ideas ⭐️"
              placeholder="Enter a blog topic..."
              value={idea.headline}
              onSubmit={(e) => generateBlogHeadlines(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  headline: e.target.value,
                })
              }
              isLoading={loading.headline}
              blogText={blogHeadlines}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Generate a blog section paragraph ✨"
              placeholder="Enter a blog section..."
              value={idea.section}
              onSubmit={(e) => generateSectionExpand(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  section: e.target.value,
                })
              }
              isLoading={loading.section}
              blogText={blogSection}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Generate keyword ideas that will rank well 🔑"
              placeholder="Enter keyword..."
              value={idea.keywords}
              onSubmit={(e) => generateSEOKeywords(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  keywords: e.target.value,
                })
              }
              isLoading={loading.keywords}
              blogText={blogKeywords}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Extract keywords from block of text 🔎"
              placeholder="Enter keyword..."
              type={TextType.TEXTAREA}
              value={idea.extract}
              onSubmit={(e) => extractKeywords(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  extract: e.target.value,
                })
              }
              isLoading={loading.extract}
              blogText={contentKeywords}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Rewrite your sentences ✏️"
              placeholder="Enter a sentence..."
              type={TextType.TEXTAREA}
              value={idea.rewrite}
              onSubmit={(e) => generateSentenceRewrite(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  rewrite: e.target.value,
                })
              }
              isLoading={loading.rewrite}
              blogText={sentenceRewrite}
            />
            <div className="border my-5"></div>
            <SectionForm
              title="Translate content in multiple languages 🗣"
              placeholder="Enter content..."
              type={TextType.TEXTAREA}
              value={idea.translate}
              onSubmit={(e) => generateTranslate(e)}
              onChange={(e) =>
                setIdea({
                  ...idea,
                  translate: e.target.value,
                })
              }
              isLoading={loading.translate}
              blogText={contentTranslate}
            />
            <LanguageDropdown language={language} setLanguage={setLanguage} />
          </main>
        </div>
      </div>

      <footer className="flex w-[20rem] mx-auto text-center justify-center space-y-2 flex-col items-center pb-10 text-xs">
        <span>
          Designed & built by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:text-blue-800 transition duration-200 ease-in-out"
            href="https://www.kelvinbrito.dev"
          >
            Kelvin Brito
          </a>
        </span>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold hover:text-blue-800 transition duration-200 ease-in-out"
          href="mailto:britok30@gmail.com"
        >
          Contact Me
        </a>
        <span>
          Made with ❤️ with Next.js, TypeScript, Tailwind &{" "}
          <a target="_blank" rel="noreferrer" href="https://openai.com/api/">
            Open AI&apos;s GPT-3
          </a>
        </span>
        <span>Copyright © {new Date().getFullYear()} All rights reserved.</span>
      </footer>
    </div>
  );
}
