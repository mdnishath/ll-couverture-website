/**
 * Sérialise un objet pour l'injecter dans un <script type="application/ld+json">.
 *
 * `JSON.stringify` seul laisse passer la séquence `</script>` : une donnée
 * contenant cette chaîne fermerait la balise et permettrait d'injecter du HTML.
 * Aujourd'hui tout le contenu est statique et rédigé par nous, mais cette
 * fonction évite que la faille apparaisse silencieusement le jour où le contenu
 * devient dynamique (CMS, formulaire, import).
 *
 * U+2028 / U+2029 sont aussi échappés : valides en JSON, ils cassent le parsing
 * JavaScript une fois inlinés dans une balise <script>.
 */
const UNSAFE = new RegExp("[<>&\\u2028\\u2029]", "g");

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(
    UNSAFE,
    (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0")
  );
}
