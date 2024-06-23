import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

fetch("https://auctions.yahoo.co.jp/search/search?auccat=&tab_ex=commerce&ei=utf-8&aq=-1&oq=&sc_i=&fr=auc_top&p=rtx3070&x=0&y=0")
    .then(resp => resp.text())
    .then(async (source) => {
        const DOM = new DOMParser().parseFromString(source, "text/html");

        const Results = [];

        const productElements = DOM.querySelectorAll(".Product__detail");

        productElements.forEach(el => {
            const name = el.querySelector(".Product__title")?.innerText || "N/A";
            const price = el.querySelector(".Product__price")?.innerText || "N/A";

            Results.push({ name, price });
        });

        console.log(Results);
    });


