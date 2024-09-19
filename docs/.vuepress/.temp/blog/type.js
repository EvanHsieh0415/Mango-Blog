      export const typesMap = {"article":{"/en-us/":{"path":"/en-us/article/","indexes":[23]},"/zh-tw/":{"path":"/zh-tw/article/","indexes":[22,0,24,25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]}},"star":{"/en-us/":{"path":"/en-us/star/","indexes":[]},"/zh-tw/":{"path":"/zh-tw/star/","indexes":[]}},"timeline":{"/en-us/":{"path":"/en-us/timeline/","indexes":[]},"/zh-tw/":{"path":"/zh-tw/timeline/","indexes":[22,0]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      