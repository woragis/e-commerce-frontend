import React from "react";
import { SocialMedia, StyledCopyright, StyledFooter, StyledDescription } from "./style";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const socialMedia = [
    { title: "github", path: "www.github.com/woragis", icon: <FaGithub /> },
    { title: "linkedin", path: "www.linkedin.com/woragis", icon: <FaLinkedin /> },
    { title: "instagram", path: "www.instagram.com/y.jezreel.andrade", icon: <FaInstagram /> },
  ];
  const socialMediaComponent = socialMedia.map(({ title, path, icon }) => {
    return (
      <li key={title}>
        <a href={path}>
          {icon} {title.toUpperCase()}
        </a>
      </li>
    );
  });
  return (
    <StyledFooter>
      <SocialMedia className='social-media'>{socialMediaComponent}</SocialMedia>
      <StyledDescription>
        <p>Projeto de E-commerce para servir de placeholder para a sua propria loja.</p>
        <p>Esse exexmplo de loja nao /e definitivo mas sim um exemplo do que o desenvolvedor pode fazer.</p>
        <p>A loja pode ser feita do jeito que voce quiser, o perfeito /e quando voce ja vem com um design pronto.</p>
        <strong>Conete-se conosco pelas redes sociais.</strong>
      </StyledDescription>
      <StyledCopyright className='copyright'>
        <strong>Jezreel de Andrade - 2023&copy;</strong>
      </StyledCopyright>
    </StyledFooter>
  );
};

export default Footer;
