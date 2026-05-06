export default {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './hooks/**/*.{ts,tsx,js,jsx}' 
  ],
  css: ['./app/globals.css'],
  output: './app/globals-cleaned.css',
  variables: true,
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}