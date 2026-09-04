export default function AnalyticsEvents() {
  const source = `(function(){if(window.__riosLuxEventsBound)return;window.__riosLuxEventsBound=true;document.addEventListener('click',function(event){var target=event.target instanceof Element?event.target:null;if(!target)return;var menuLink=target.closest('#mobile-navigation a');if(menuLink){var menu=menuLink.closest('details');if(menu)menu.removeAttribute('open');}var tracked=target.closest('[data-track-event]');if(!tracked)return;var name=tracked.getAttribute('data-track-event');var label=tracked.getAttribute('data-track-label')||undefined;if(window.gtag){window.gtag('event',name,{label:label});return;}if(window.dataLayer)window.dataLayer.push({event:name,label:label});});})();`

  return <script id="rios-lux-analytics-events" dangerouslySetInnerHTML={{ __html: source }} />
}
