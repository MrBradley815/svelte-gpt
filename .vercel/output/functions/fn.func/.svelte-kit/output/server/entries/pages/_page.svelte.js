import { c as create_ssr_component, b as add_attribute, d as each, e as escape, n as null_to_empty } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
const messages = writable([]);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".responses.svelte-zylc4a{max-height:calc(100vh - 454px);overflow-y:scroll}li.message.svelte-zylc4a,li.answer.svelte-zylc4a{max-width:95%;margin-bottom:-1rem;padding:0.5rem 1rem 2.5rem;border-radius:0.25rem}li.message.svelte-zylc4a{text-align:left;color:var(--h1-color);background-color:var(--primary)}li.answer.svelte-zylc4a{text-align:right;color:var(--h1-color);background-color:var(--secondary);margin-left:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let messageList = [];
  let message;
  messages.subscribe((data) => {
    messageList = data;
  });
  $$result.css.add(css);
  return `<main><h1>SvelteGPT</h1>
  <article><form>
      <input type="text" name="message" placeholder="Ask me anything!"${add_attribute("value", message, 0)}>
      ${`<button>Send</button>`}</form></article>
  ${messageList.length > 0 ? `<article class="responses svelte-zylc4a"><ul>${each(messageList, (message2) => {
    return `<li class="${escape(null_to_empty(message2.type === "message" ? "message" : "answer"), true) + " svelte-zylc4a"}">${escape(message2.message)}</li>`;
  })}</ul>
      ${``}</article>` : ``}
</main>`;
});
export {
  Page as default
};
