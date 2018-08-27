import React from "react";
import NepalIndex from "../content/nepal/Index"
import NepalPrehled from "../content/nepal/Prehled"
import NepalPrijezd from "../content/nepal/Prijezd"
import SlovinskoIndex from "../content/slovinsko/Index"
import SlovinskoPrehled from "../content/slovinsko/Prehled"
import SlovinskoPrijezd from "../content/slovinsko/Prijezd"

export default ({articleId, match}) => {
    const overviewPageName = "index";
    const detailId = match.params.detailId || overviewPageName;
    let componentName = `${articleId}_${detailId}`;

    const components = {
        nepal_index: NepalIndex,
        nepal_prehled: NepalPrehled,
        nepal_prijezd: NepalPrijezd,
        slovinsko_index: SlovinskoIndex,
        slovinsko_prehled: SlovinskoPrehled,
        slovinsko_prijezd: SlovinskoPrijezd,
    };

    if (!(componentName in components)) {
        componentName = `${articleId}_${overviewPageName}`
    }

    const Article = components[componentName];

    return <Article />
}