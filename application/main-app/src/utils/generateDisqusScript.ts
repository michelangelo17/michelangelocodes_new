export const generateDisqusScript = (nonce: string, shortname: string) => {
  return `
    <div id="disqus_thread"></div>
    <script nonce="${nonce}">
      var disqus_config = function () {
        this.page.url = window.location.href
        this.page.identifier = window.location.pathname
      }

      (function () {
        var d = document, s = d.createElement('script')
        s.src = 'https://${shortname}.disqus.com/embed.js'
        s.setAttribute('data-timestamp', +new Date())
        s.setAttribute('nonce', '${nonce}')
        (d.head || d.body).appendChild(s)
      })()
    </script>
    <noscript>Please enable JavaScript to view the comments powered by Disqus.</noscript>
  `
}
