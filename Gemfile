source "https://rubygems.org"

# Utilise Jekyll 4.3 (compatible Hydejack v9)
gem "jekyll", "~> 4.3"

# Utilise le thème Hydejack depuis un dossier local.
# ⚠️ Assure-toi que le dossier "#jekyll-theme-hydejack" existe à la racine du projet
# et qu’il contient tous les fichiers du thème (layouts, includes, assets, etc.)
gem "jekyll-theme-hydejack", path: "./#jekyll-theme-hydejack"

# Pour le rendu des formules mathématiques (KaTeX)
gem "kramdown-math-katex"

# Runtime JS (obligatoire pour kramdown-math-katex)
gem "duktape"

# Requis pour Ruby 3+
gem "webrick"

# Plugins Jekyll
group :jekyll_plugins do
  gem "jekyll-default-layout"
  gem "jekyll-feed"
  gem "jekyll-optional-front-matter"
  gem "jekyll-paginate"
  gem "jekyll-readme-index"
  gem "jekyll-redirect-from"
  gem "jekyll-relative-links"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-titles-from-headings"
  gem "jekyll-include-cache"

  # Plugins supplémentaires (non GitHub Pages)
  gem "jekyll-last-modified-at"
  gem "jekyll-compose"
end

# Compatibilité Windows
gem "wdm" if Gem.win_platform?
gem "tzinfo-data" if Gem.win_platform?
