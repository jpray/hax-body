(function() {

  let props = {
          'canScale': true,
          'canPosition': true,
          'canEditSource': true,
          'gizmo': {
            'title': 'voya-content',
            'description': 'Is a hello world example for hax',
            'icon': 'editor:format-quote',
            'color': 'grey',
            'groups': ['Content', 'Presentation'],
            'handles': [
              {
                'type': 'content',
                'caption': 'quote',
                'title': 'citation',
                'description': 'quote',
                'citation': 'citation',
                'color': 'colorCode'
              }
            ],
            'meta': {
              'author': 'LRNWebComponents'
            }
          },
          'settings': {
            'quick': [],
            'configure': [
              {
                'property': 'type',
                'title': 'Type',
                'description': 'type of content slot',
                'inputMethod': 'select',
                'icon': 'editor:format-color-fill',
                'options': {
                  'TEASER_SMALL': 'TEASER_SMALL',
                  'TEASER_MEDIUM': 'TEASER_MEDIUM',
                  'TEASER_LARGE': 'TEASER_LARGE'
                }
              },
              {
                'property': 'topic',
                'title': 'Topic',
                'description': 'Content Topic',
                'inputMethod': 'textfield',
                'icon': 'editor:border-outer',
              }
            ],//cms-base-url
            'advanced': [
              {
                'property': 'cmsBaseUrl',
                'title': 'CMS Base Url',
                'description': 'Defines where content is pulled from.',
                'inputMethod': 'textfield',
                'default': 'https://resourcecenter.unit.voya.com/',
                'icon': 'editor:border-outer',
              }
            ]
          }
        };


class VoyaContentIntegration extends HTMLElement {

  constructor() {
    super();
    Object.assign(this, window.HAXBehaviors.PropertiesBehaviors);
    this.type = 'TEASER_SMALL';
    this.topic = 'ARTICLE_MANAGE_DEBT_AND_HAVE_FUN';
    this.contentBaseUrl = 'https://resourcecenter.unit.voya.com/';
    this.properties.type = {
        type: String,
        value: 'TEASER_SMALL'
      };
    this.properties.topic = {
      type: String,
      value: 'ARTICLE_MANAGE_DEBT_AND_HAVE_FUN'
    }
    this.properties.cmsBaseUrl = {
      type: String,
      value: 'https://resourcecenter.unit.voya.com/'
    }
  }
  connectedCallback() {
    debugger;
    this.setHaxProperties(props, 'voya-content');
  }

  fire(eventName, detail) {
    debugger;
    this.dispatchEvent(new CustomEvent(eventName, {
      bubbles:true,
      detail: detail
    }))
  }
}

window.customElements.define('voya-content-integration-element', VoyaContentIntegration);


})();
