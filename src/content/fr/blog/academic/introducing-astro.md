---
title: Je présente Astro - Envoyez Moins de JavaScript
date: "2021-06-08"
image: https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
author: Fred K. Schott
authorTwitter: FredKSchott
authorImage: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg
category: design
tags:
- astro
- jam-stack
description: Il y a un secret simple pour construire un site web plus rapide — envoyez simplement moins.
style: "academic"
lang: fr
---

Malheureusement, le développement web moderne a tendance à aller dans la direction opposée—vers plus. Plus de JavaScript, plus de fonctionnalités, plus de composants mobiles, et finalement plus de complexité nécessaire pour tout faire fonctionner correctement.

Aujourd'hui, je suis ravi de partager publiquement Astro : un nouveau type de générateur de site statique qui offre des performances ultra-rapides avec une expérience de développeur moderne. Pour concevoir Astro, nous avons emprunté les meilleures parties de nos outils préférés puis ajouté quelques innovations de notre cru, y compris :

- Apportez Votre Propre Framework (AVPF) : Construisez votre site en utilisant React, Svelte, Vue, Preact, les composants web, ou simplement du bon vieux HTML + JavaScript.
- 100% HTML Statique, Pas de JS : Astro transforme votre page entière en HTML statique, supprimant tout JavaScript de votre build final par défaut.
- Composants à la Demande : Besoin de JS ? Astro peut automatiquement hydrater les composants interactifs lorsqu'ils deviennent visibles sur la page. Si l'utilisateur ne le voit jamais, il ne le charge jamais.
- Entièrement Équipé : Astro supporte TypeScript, CSS avec Portée, Modules CSS, Sass, Tailwind, Markdown, MDX, et tous vos paquets npm préférés.
- SEO Activé : Des sitemaps automatiques, des flux RSS, la pagination et les collections éliminent la difficulté du SEO et de la syndication.

## H1 c'est bien

### H2 c'est bien aussi

> les liens sont meilleurs

[Je sais](ils-sont-meilleurs)

Ce post marque la première version bêta publique d'Astro. Des fonctionnalités manquantes et des bugs sont encore à prévoir à ce stade préliminaire. Il reste encore quelques mois avant une sortie officielle en version 1.0, mais plusieurs sites rapides construits avec Astro sont déjà en production aujourd'hui. Nous aimerions beaucoup recevoir vos premiers retours alors que nous avançons vers une sortie en v1.0 plus tard cette année.

> Pour en savoir plus sur Astro et commencer à construire votre premier site, consultez le README du projet.
