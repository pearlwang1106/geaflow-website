

export const historyPushLinkAt = (
    path: string
) => {
    const basePath = '/geaflow-website'
    const { pathname } = window.location
    const lang = pathname.includes('/zh-CN') ? '/zh-CN' : ''

    const [navpath, route] = path?.replace('\/', ',')?.split(',')
    let navLang = `/${navpath}`

    if (['docs', 'community'].includes(navpath) && pathname.includes('/zh-CN')) {
        navLang = `${navLang}/zh`
    }



    return `${basePath}${lang}${navLang + '/' + route}`
};