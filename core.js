function openPic(url, winName, winParams) {
    var theWindow = window.open(url, winName, winParams);
    if (theWindow) {
        theWindow.focus();
    }
}



(function(g, b) {
    function k() {
        var a = e.elements;
        return "string" == typeof a ? a.split(" ") : a
    }

    function l(a) {
        var c = {},
            f = a.createElement,
            b = a.createDocumentFragment,
            d = b();
        a.createElement = function(a) {
            if (!e.shivMethods) return f(a);
            var b;
            b = c[a] ? c[a].cloneNode() : m.test(a) ? (c[a] = f(a)).cloneNode() : f(a);
            return b.canHaveChildren && !n.test(a) ? d.appendChild(b) : b
        };
        a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + k().join().replace(/\w+/g, function(a) {
            f(a);
            d.createElement(a);
            return 'c("' + a + '")'
        }) + ");return n}")(e, d)
    }

    function h(a) {
        var c;
        if (a.documentShived) return a;
        if (e.shivCSS && !i) {
            c = a.createElement("p");
            var b = a.getElementsByTagName("head")[0] || a.documentElement;
            c.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
            c = !!b.insertBefore(c.lastChild, b.firstChild)
        }
        j || (c = !l(a));
        if (c) a.documentShived = c;
        return a
    }
    var d = g.html5 || {},
        n = /^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i,
        m = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
        i, j;
    (function() {
        var a = b.createElement("a");
        a.innerHTML = "<xyz></xyz>";
        i = "hidden" in a;
        if (!(a = 1 == a.childNodes.length)) a: {
            try {
                b.createElement("a")
            } catch (c) {
                a = !0;
                break a
            }
            a = b.createDocumentFragment();
            a = "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
        }
        j =
            a
    })();
    var e = {
        elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: !1 !== d.shivCSS,
        shivMethods: !1 !== d.shivMethods,
        type: "default",
        shivDocument: h
    };
    g.html5 = e;
    h(b)
})(this, document);


/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b) {
    b.support.touch = "ontouchend" in document;
    if (!b.support.touch) {
        return;
    }
    var c = b.ui.mouse.prototype,
        e = c._mouseInit,
        a;

    function d(g, h) {
        if (g.originalEvent.touches.length > 1) {
            return;
        }
        g.preventDefault();
        var i = g.originalEvent.changedTouches[0],
            f = document.createEvent("MouseEvents");
        f.initMouseEvent(h, true, true, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, false, false, false, false, 0, null);
        g.target.dispatchEvent(f);
    }
    c._touchStart = function(g) {
        var f = this;
        if (a || !f._mouseCapture(g.originalEvent.changedTouches[0])) {
            return;
        }
        a = true;
        f._touchMoved = false;
        d(g, "mouseover");
        d(g, "mousemove");
        d(g, "mousedown");
    };
    c._touchMove = function(f) {
        if (!a) {
            return;
        }
        this._touchMoved = true;
        d(f, "mousemove");
    };
    c._touchEnd = function(f) {
        if (!a) {
            return;
        }
        d(f, "mouseup");
        d(f, "mouseout");
        if (!this._touchMoved) {
            d(f, "click");
        }
        a = false;
    };
    c._mouseInit = function() {
        var f = this;
        f.element.bind("touchstart", b.proxy(f, "_touchStart")).bind("touchmove", b.proxy(f, "_touchMove")).bind("touchend", b.proxy(f, "_touchEnd"));
        e.call(f);
    };
})(jQuery);



/*! fancyBox v2.0.6 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s, l, d, t) {
    var m = d(s),
        q = d(l),
        a = d.fancybox = function() {
            a.open.apply(this, arguments)
        },
        u = !1,
        k = l.createTouch !== t,
        o = function(a) {
            return "string" === d.type(a)
        },
        n = function(b, c) {
            c && o(b) && 0 < b.indexOf("%") && (b = a.getViewport()[c] / 100 * parseInt(b, 10));
            return Math.round(b) + "px"
        };
    d.extend(a, {
        version: "2.0.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            autoResize: !k,
            autoCenter: !k,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            fixed: !1,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            keys: {
                next: [13, 32, 34, 39, 40],
                prev: [8, 33, 37, 38],
                close: [27]
            },
            tpl: {
                wrap: '<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' +
                    (d.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
                swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
                next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 300,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 300,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 300,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 300,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: {
                    speedIn: 0,
                    speedOut: 300,
                    opacity: 0.8,
                    css: {
                        cursor: "pointer"
                    },
                    closeClick: !0
                },
                title: {
                    type: "float"
                }
            }
        },
        group: {},
        opts: {},
        coming: null,
        current: null,
        isOpen: !1,
        isOpened: !1,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(b, c) {
            a.close(!0);
            b && !d.isArray(b) && (b = b instanceof d ? d(b).get() : [b]);
            a.isActive = !0;
            a.opts = d.extend(!0, {}, a.defaults, c);
            d.isPlainObject(c) && c.keys !== t && (a.opts.keys = c.keys ?
                d.extend({}, a.defaults.keys, c.keys) : !1);
            a.group = b;
            a._start(a.opts.index || 0)
        },
        cancel: function() {
            a.coming && !1 === a.trigger("onCancel") || (a.coming = null, a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onabort = a.imgPreload.onerror = null))
        },
        close: function(b) {
            a.cancel();
            a.current && !1 !== a.trigger("beforeClose") && (a.unbindEvents(), !a.isOpen || b && !0 === b[0] ? (d(".fancybox-wrap").stop().trigger("onReset").remove(), a._afterZoomOut()) : (a.isOpen = a.isOpened = !1, d(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.closeMethod]()))
        },
        play: function(b) {
            var c = function() {
                    clearTimeout(a.player.timer)
                },
                e = function() {
                    c();
                    a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
                },
                f = function() {
                    c();
                    d("body").unbind(".player");
                    a.player.isActive = !1;
                    a.trigger("onPlayEnd")
                };
            if (a.player.isActive || b && !1 === b[0]) f();
            else if (a.current && (a.current.loop ||
                a.current.index < a.group.length - 1)) a.player.isActive = !0, d("body").bind({
                "afterShow.player onUpdate.player": e,
                "onCancel.player beforeClose.player": f,
                "beforeLoad.player": c
            }), e(), a.trigger("onPlayStart")
        },
        next: function() {
            a.current && a.jumpto(a.current.index + 1)
        },
        prev: function() {
            a.current && a.jumpto(a.current.index - 1)
        },
        jumpto: function(b) {
            a.current && (b = parseInt(b, 10), 1 < a.group.length && a.current.loop && (b >= a.group.length ? b = 0 : 0 > b && (b = a.group.length - 1)), a.group[b] !== t && (a.cancel(), a._start(b)))
        },
        reposition: function(b,
            c) {
            var e;
            a.isOpen && (e = a._getPosition(c), b && "scroll" === b.type ? (delete e.position, a.wrap.stop(!0, !0).animate(e, 200)) : a.wrap.css(e))
        },
        update: function(b) {
            a.isOpen && (u || setTimeout(function() {
                    var c = a.current,
                        e = !b || b && "orientationchange" === b.type;
                    if (u && (u = !1, c)) {
                        if (!b || "scroll" !== b.type || e) c.autoSize && "iframe" !== c.type && (a.inner.height("auto"), c.height = a.inner.height()), (c.autoResize || e) && a._setDimension(), c.canGrow && "iframe" !== c.type && a.inner.height("auto");
                        (c.autoCenter || e) && a.reposition(b);
                        a.trigger("onUpdate")
                    }
                },
                200), u = !0)
        },
        toggle: function() {
            a.isOpen && (a.current.fitToView = !a.current.fitToView, a.update())
        },
        hideLoading: function() {
            q.unbind("keypress.fb");
            d("#fancybox-loading").remove()
        },
        showLoading: function() {
            a.hideLoading();
            q.bind("keypress.fb", function(b) {
                27 === b.keyCode && (b.preventDefault(), a.cancel())
            });
            d('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body")
        },
        getViewport: function() {
            return {
                x: m.scrollLeft(),
                y: m.scrollTop(),
                w: k && s.innerWidth ? s.innerWidth : m.width(),
                h: k && s.innerHeight ?
                    s.innerHeight : m.height()
            }
        },
        unbindEvents: function() {
            a.wrap && a.wrap.unbind(".fb");
            q.unbind(".fb");
            m.unbind(".fb")
        },
        bindEvents: function() {
            var b = a.current,
                c = b.keys;
            b && (m.bind("resize.fb orientationchange.fb" + (b.autoCenter && !b.fixed ? " scroll.fb" : ""), a.update), c && q.bind("keydown.fb", function(b) {
                var f;
                f = b.target || b.srcElement;
                if (!b.ctrlKey && !b.altKey && !b.shiftKey && !b.metaKey && (!f || !f.type && !d(f).is("[contenteditable]"))) f = b.keyCode, -1 < d.inArray(f, c.close) ? (a.close(), b.preventDefault()) : -1 < d.inArray(f, c.next) ?
                    (a.next(), b.preventDefault()) : -1 < d.inArray(f, c.prev) && (a.prev(), b.preventDefault())
            }), d.fn.mousewheel && b.mouseWheel && 1 < a.group.length && a.wrap.bind("mousewheel.fb", function(b, c) {
                var d = b.target || null;
                if (0 !== c && (!d || 0 === d.clientHeight || d.scrollHeight === d.clientHeight && d.scrollWidth === d.clientWidth)) b.preventDefault(), a[0 < c ? "prev" : "next"]()
            }))
        },
        trigger: function(b, c) {
            var e, f = c || a[-1 < d.inArray(b, ["onCancel", "beforeLoad", "afterLoad"]) ? "coming" : "current"];
            if (f) {
                d.isFunction(f[b]) && (e = f[b].apply(f, Array.prototype.slice.call(arguments,
                    1)));
                if (!1 === e) return !1;
                f.helpers && d.each(f.helpers, function(c, e) {
                    if (e && d.isPlainObject(a.helpers[c]) && d.isFunction(a.helpers[c][b])) a.helpers[c][b](e, f)
                });
                d.event.trigger(b + ".fb")
            }
        },
        isImage: function(a) {
            return o(a) && a.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i)
        },
        isSWF: function(a) {
            return o(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(b) {
            var c = {},
                e = a.group[b] || null,
                f, g, i;
            if (e && (e.nodeType || e instanceof d)) f = !0, d.metadata && (c = d(e).metadata());
            c = d.extend(!0, {}, a.opts, {
                    index: b,
                    element: e
                }, d.isPlainObject(e) ?
                e : c);
            d.each(["href", "title", "content", "type"], function(b, g) {
                c[g] = a.opts[g] || f && d(e).attr(g) || c[g] || null
            });
            "number" === typeof c.margin && (c.margin = [c.margin, c.margin, c.margin, c.margin]);
            c.modal && d.extend(!0, c, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        css: {
                            cursor: "auto"
                        },
                        closeClick: !1
                    }
                }
            });
            a.coming = c;
            if (!1 === a.trigger("beforeLoad")) a.coming = null;
            else {
                g = c.type;
                b = c.href || e;
                g || (f && (g = d(e).data("fancybox-type"), g || (g = (g = e.className.match(/fancybox\.(\w+)/)) ?
                    g[1] : null)), !g && o(b) && (a.isImage(b) ? g = "image" : a.isSWF(b) ? g = "swf" : b.match(/^#/) && (g = "inline")), g || (g = f ? "inline" : "html"), c.type = g);
                if ("inline" === g || "html" === g) {
                    if (c.content || (c.content = "inline" === g ? d(o(b) ? b.replace(/.*(?=#[^\s]+$)/, "") : b) : e), !c.content || !c.content.length) g = null
                } else b || (g = null);
                "ajax" === g && o(b) && (i = b.split(/\s+/, 2), b = i.shift(), c.selector = i.shift());
                c.href = b;
                c.group = a.group;
                c.isDom = f;
                switch (g) {
                    case "image":
                        a._loadImage();
                        break;
                    case "ajax":
                        a._loadAjax();
                        break;
                    case "inline":
                    case "iframe":
                    case "swf":
                    case "html":
                        a._afterLoad();
                        break;
                    default:
                        a._error("type")
                }
            }
        },
        _error: function(b) {
            a.hideLoading();
            d.extend(a.coming, {
                type: "html",
                autoSize: !0,
                minWidth: 0,
                minHeight: 0,
                padding: 15,
                hasError: b,
                content: a.coming.tpl.error
            });
            a._afterLoad()
        },
        _loadImage: function() {
            var b = a.imgPreload = new Image;
            b.onload = function() {
                this.onload = this.onerror = null;
                a.coming.width = this.width;
                a.coming.height = this.height;
                a._afterLoad()
            };
            b.onerror = function() {
                this.onload = this.onerror = null;
                a._error("image")
            };
            b.src = a.coming.href;
            (b.complete === t || !b.complete) && a.showLoading()
        },
        _loadAjax: function() {
            a.showLoading();
            a.ajaxLoad = d.ajax(d.extend({}, a.coming.ajax, {
                url: a.coming.href,
                error: function(b, c) {
                    a.coming && "abort" !== c ? a._error("ajax", b) : a.hideLoading()
                },
                success: function(b, c) {
                    "success" === c && (a.coming.content = b, a._afterLoad())
                }
            }))
        },
        _preloadImages: function() {
            var b = a.group,
                c = a.current,
                e = b.length,
                f, g, i, h = Math.min(c.preload, e - 1);
            if (c.preload && !(2 > b.length))
                for (i = 1; i <= h; i += 1)
                    if (f = b[(c.index + i) % e], g = f.href || d(f).attr("href") || f, "image" === f.type || a.isImage(g))(new Image).src = g
        },
        _afterLoad: function() {
            a.hideLoading();
            !a.coming || !1 === a.trigger("afterLoad", a.current) ? a.coming = !1 : (a.isOpened ? (d(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.prevMethod]()) : (d(".fancybox-wrap").stop().trigger("onReset").remove(), a.trigger("afterClose")), a.unbindEvents(), a.isOpen = !1, a.current = a.coming, a.wrap = d(a.current.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + a.current.type + " fancybox-tmp " + a.current.wrapCSS).appendTo("body"),
                a.skin = d(".fancybox-skin", a.wrap).css("padding", n(a.current.padding)), a.outer = d(".fancybox-outer", a.wrap), a.inner = d(".fancybox-inner", a.wrap), a._setContent())
        },
        _setContent: function() {
            var b = a.current,
                c = b.content,
                e = b.type,
                f = b.minWidth,
                g = b.minHeight,
                i = b.maxWidth,
                h = b.maxHeight;
            switch (e) {
                case "inline":
                case "ajax":
                case "html":
                    b.selector ? c = d("<div>").html(c).find(b.selector) : c instanceof d && (c.parent().hasClass("fancybox-inner") && c.parents(".fancybox-wrap").unbind("onReset"), c = c.show().detach(), d(a.wrap).bind("onReset",
                        function() {
                            c.appendTo("body").hide()
                        }));
                    b.autoSize && (f = d('<div class="fancybox-wrap ' + a.current.wrapCSS + ' fancybox-tmp"></div>').appendTo("body").css({
                        minWidth: n(f, "w"),
                        minHeight: n(g, "h"),
                        maxWidth: n(i, "w"),
                        maxHeight: n(h, "h")
                    }).append(c), b.width = f.width(), b.height = f.height(), f.width(a.current.width), f.height() > b.height && (f.width(b.width + 1), b.width = f.width(), b.height = f.height()), c = f.contents().detach(), f.remove());
                    break;
                case "image":
                    c = b.tpl.image.replace("{href}", b.href);
                    b.aspectRatio = !0;
                    break;
                case "swf":
                    c =
                        b.tpl.swf.replace(/\{width\}/g, b.width).replace(/\{height\}/g, b.height).replace(/\{href\}/g, b.href);
                    break;
                case "iframe":
                    c = d(b.tpl.iframe.replace("{rnd}", (new Date).getTime())).attr("scrolling", b.scrolling).attr("src", b.href), b.scrolling = k ? "scroll" : "auto"
            }
            if ("image" === e || "swf" === e) b.autoSize = !1, b.scrolling = "visible";
            "iframe" === e && b.autoSize ? (a.showLoading(), a._setDimension(), a.inner.css("overflow", b.scrolling), c.bind({
                onCancel: function() {
                    d(this).unbind();
                    a._afterZoomOut()
                },
                load: function() {
                    a.hideLoading();
                    try {
                        this.contentWindow.document.location && (a.current.height = d(this).contents().find("body").height())
                    } catch (b) {
                        a.current.autoSize = !1
                    }
                    a[a.isOpen ? "_afterZoomIn" : "_beforeShow"]()
                }
            }).appendTo(a.inner)) : (a.inner.append(c), a._beforeShow())
        },
        _beforeShow: function() {
            a.coming = null;
            a.trigger("beforeShow");
            a._setDimension();
            a.wrap.hide().removeClass("fancybox-tmp");
            a.bindEvents();
            a._preloadImages();
            a.transitions[a.isOpened ? a.current.nextMethod : a.current.openMethod]()
        },
        _setDimension: function() {
            var b = a.wrap,
                c =
                a.inner,
                e = a.current,
                f = a.getViewport(),
                g = e.margin,
                i = 2 * e.padding,
                h = e.width,
                j = e.height,
                r = e.maxWidth + i,
                k = e.maxHeight + i,
                l = e.minWidth + i,
                m = e.minHeight + i,
                p;
            f.w -= g[1] + g[3];
            f.h -= g[0] + g[2];
            o(h) && 0 < h.indexOf("%") && (h = (f.w - i) * parseFloat(h) / 100);
            o(j) && 0 < j.indexOf("%") && (j = (f.h - i) * parseFloat(j) / 100);
            g = h / j;
            h += i;
            j += i;
            e.fitToView && (r = Math.min(f.w, r), k = Math.min(f.h, k));
            if (e.aspectRatio) {
                if (h > r && (h = r, j = (h - i) / g + i), j > k && (j = k, h = (j - i) * g + i), h < l && (h = l, j = (h - i) / g + i), j < m) j = m, h = (j - i) * g + i
            } else h = Math.max(l, Math.min(h, r)), j = Math.max(m,
                Math.min(j, k));
            h = Math.round(h);
            j = Math.round(j);
            d(b.add(c)).width("auto").height("auto");
            c.width(h - i).height(j - i);
            b.width(h);
            p = b.height();
            if (h > r || p > k)
                for (;
                    (h > r || p > k) && h > l && p > m;) j -= 10, e.aspectRatio ? (h = Math.round((j - i) * g + i), h < l && (h = l, j = (h - i) / g + i)) : h -= 10, c.width(h - i).height(j - i), b.width(h), p = b.height();
            e.dim = {
                width: n(h),
                height: n(p)
            };
            e.canGrow = e.autoSize && j > m && j < k;
            e.canShrink = !1;
            e.canExpand = !1;
            if (h - i < e.width || j - i < e.height) e.canExpand = !0;
            else if ((h > f.w || p > f.h) && h > l && j > m) e.canShrink = !0;
            a.innerSpace = p - i -
                c.height()
        },
        _getPosition: function(b) {
            var c = a.current,
                e = a.getViewport(),
                f = c.margin,
                d = a.wrap.width() + f[1] + f[3],
                i = a.wrap.height() + f[0] + f[2],
                h = {
                    position: "absolute",
                    top: f[0] + e.y,
                    left: f[3] + e.x
                };
            c.autoCenter && c.fixed && !b && i <= e.h && d <= e.w && (h = {
                position: "fixed",
                top: f[0],
                left: f[3]
            });
            h.top = n(Math.max(h.top, h.top + (e.h - i) * c.topRatio));
            h.left = n(Math.max(h.left, h.left + 0.5 * (e.w - d)));
            return h
        },
        _afterZoomIn: function() {
            var b = a.current,
                c = b ? b.scrolling : "no";
            if (b && (a.isOpen = a.isOpened = !0, a.wrap.addClass("fancybox-opened"),
                a.inner.css("overflow", "yes" === c ? "scroll" : "no" === c ? "hidden" : c), a.trigger("afterShow"), a.update(), (b.closeClick || b.nextClick) && a.inner.css("cursor", "pointer").bind("click.fb", function(c) {
                    if (!d(c.target).is("a") && !d(c.target).parent().is("a")) a[b.closeClick ? "close" : "next"]()
                }), b.closeBtn && d(b.tpl.closeBtn).appendTo(a.skin).bind("click.fb", a.close), b.arrows && 1 < a.group.length && ((b.loop || 0 < b.index) && d(b.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (b.loop || b.index < a.group.length - 1) && d(b.tpl.next).appendTo(a.outer).bind("click.fb",
                    a.next)), a.opts.autoPlay && !a.player.isActive)) a.opts.autoPlay = !1, a.play()
        },
        _afterZoomOut: function() {
            var b = a.current;
            a.wrap.trigger("onReset").remove();
            d.extend(a, {
                group: {},
                opts: {},
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            a.trigger("afterClose", b)
        }
    });
    a.transitions = {
        getOrigPosition: function() {
            var b = a.current,
                c = b.element,
                e = b.padding,
                f = d(b.orig),
                g = {},
                i = 50,
                h = 50;
            !f.length && b.isDom && d(c).is(":visible") && (f = d(c).find("img:first"), f.length || (f = d(c)));
            f.length ?
                (g = f.offset(), f.is("img") && (i = f.outerWidth(), h = f.outerHeight())) : (b = a.getViewport(), g.top = b.y + 0.5 * (b.h - h), g.left = b.x + 0.5 * (b.w - i));
            return g = {
                top: n(g.top - e),
                left: n(g.left - e),
                width: n(i + 2 * e),
                height: n(h + 2 * e)
            }
        },
        step: function(b, c) {
            var e = c.prop,
                d, g;
            if ("width" === e || "height" === e) d = Math.ceil(b - 2 * a.current.padding), "height" === e && (g = (b - c.start) / (c.end - c.start), c.start > c.end && (g = 1 - g), d -= a.innerSpace * g), a.inner[e](d)
        },
        zoomIn: function() {
            var b = a.wrap,
                c = a.current,
                e = c.openEffect,
                f = "elastic" === e,
                g = d.extend({}, c.dim,
                    a._getPosition(f)),
                i = d.extend({
                    opacity: 1
                }, g);
            delete i.position;
            f ? (g = this.getOrigPosition(), c.openOpacity && (g.opacity = 0), a.outer.add(a.inner).width("auto").height("auto")) : "fade" === e && (g.opacity = 0);
            b.css(g).show().animate(i, {
                duration: "none" === e ? 0 : c.openSpeed,
                easing: c.openEasing,
                step: f ? this.step : null,
                complete: a._afterZoomIn
            })
        },
        zoomOut: function() {
            var b = a.wrap,
                c = a.current,
                d = c.openEffect,
                f = "elastic" === d,
                g = {
                    opacity: 0
                };
            f && ("fixed" === b.css("position") && b.css(a._getPosition(!0)), g = this.getOrigPosition(), c.closeOpacity &&
                (g.opacity = 0));
            b.animate(g, {
                duration: "none" === d ? 0 : c.closeSpeed,
                easing: c.closeEasing,
                step: f ? this.step : null,
                complete: a._afterZoomOut
            })
        },
        changeIn: function() {
            var b = a.wrap,
                c = a.current,
                d = c.nextEffect,
                f = "elastic" === d,
                g = a._getPosition(f),
                i = {
                    opacity: 1
                };
            g.opacity = 0;
            f && (g.top = n(parseInt(g.top, 10) - 200), i.top = "+=200px");
            b.css(g).show().animate(i, {
                duration: "none" === d ? 0 : c.nextSpeed,
                easing: c.nextEasing,
                complete: a._afterZoomIn
            })
        },
        changeOut: function() {
            var b = a.wrap,
                c = a.current,
                e = c.prevEffect,
                f = {
                    opacity: 0
                };
            b.removeClass("fancybox-opened");
            "elastic" === e && (f.top = "+=200px");
            b.animate(f, {
                duration: "none" === e ? 0 : c.prevSpeed,
                easing: c.prevEasing,
                complete: function() {
                    d(this).trigger("onReset").remove()
                }
            })
        }
    };
    a.helpers.overlay = {
        overlay: null,
        update: function() {
            var a, c;
            this.overlay.width("100%").height("100%");
            d.browser.msie || k ? (a = Math.max(l.documentElement.scrollWidth, l.body.scrollWidth), c = Math.max(l.documentElement.offsetWidth, l.body.offsetWidth), a = a < c ? m.width() : a) : a = q.width();
            this.overlay.width(a).height(q.height())
        },
        beforeShow: function(b) {
            this.overlay ||
                (b = d.extend(!0, {}, a.defaults.helpers.overlay, b), this.overlay = d('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"), b.closeClick && this.overlay.bind("click.fb", a.close), a.current.fixed && !k ? this.overlay.addClass("overlay-fixed") : (this.update(), this.onUpdate = function() {
                    this.update()
                }), this.overlay.fadeTo(b.speedIn, b.opacity))
        },
        afterClose: function(a) {
            this.overlay && this.overlay.fadeOut(a.speedOut || 0, function() {
                d(this).remove()
            });
            this.overlay = null
        }
    };
    a.helpers.title = {
        beforeShow: function(b) {
            var c;
            if (c = a.current.title) c = d('<div class="fancybox-title fancybox-title-' + b.type + '-wrap">' + c + "</div>").appendTo("body"), "float" === b.type && (c.width(c.width()), c.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(parseInt(c.css("margin-bottom"), 10))), c.appendTo("over" === b.type ? a.inner : "outside" === b.type ? a.wrap : a.skin)
        }
    };
    d.fn.fancybox = function(b) {
        var c = d(this),
            e = this.selector || "",
            f, g = function(g) {
                var h = this,
                    j = f,
                    k;
                !g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !d(h).is(".fancybox-wrap") &&
                    (g.preventDefault(), g = b.groupAttr || "data-fancybox-group", k = d(h).attr(g), k || (g = "rel", k = h[g]), k && "" !== k && "nofollow" !== k && (h = e.length ? d(e) : c, h = h.filter("[" + g + '="' + k + '"]'), j = h.index(this)), b.index = j, a.open(h, b))
            },
            b = b || {};
        f = b.index || 0;
        e ? q.undelegate(e, "click.fb-start").delegate(e, "click.fb-start", g) : c.unbind("click.fb-start").bind("click.fb-start", g);
        return this
    };
    d(l).ready(function() {
        a.defaults.fixed = d.support.fixedPosition || !(d.browser.msie && 6 >= d.browser.version) && !k
    })
})(window, document, jQuery);


/* 
 * flowplayer.js 3.2.6. The Flowplayer API
 *
 * Copyright 2009-2011 Flowplayer Oy
 *
 * This file is part of Flowplayer.
 *
 * Flowplayer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Flowplayer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Flowplayer.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Date: 2011-02-04 05:45:28 -0500 (Fri, 04 Feb 2011)
 * Revision: 614
 */
(function() {
    function g(o) {
        console.log("$f.fireEvent", [].slice.call(o))
    }

    function k(q) {
        if (!q || typeof q != "object") {
            return q
        }
        var o = new q.constructor();
        for (var p in q) {
            if (q.hasOwnProperty(p)) {
                o[p] = k(q[p])
            }
        }
        return o
    }

    function m(t, q) {
        if (!t) {
            return
        }
        var o, p = 0,
            r = t.length;
        if (r === undefined) {
            for (o in t) {
                if (q.call(t[o], o, t[o]) === false) {
                    break
                }
            }
        } else {
            for (var s = t[0]; p < r && q.call(s, p, s) !== false; s = t[++p]) {}
        }
        return t
    }

    function c(o) {
        return document.getElementById(o)
    }

    function i(q, p, o) {
        if (typeof p != "object") {
            return q
        }
        if (q && p) {
            m(p, function(r, s) {
                if (!o || typeof s != "function") {
                    q[r] = s
                }
            })
        }
        return q
    }

    function n(s) {
        var q = s.indexOf(".");
        if (q != -1) {
            var p = s.slice(0, q) || "*";
            var o = s.slice(q + 1, s.length);
            var r = [];
            m(document.getElementsByTagName(p), function() {
                if (this.className && this.className.indexOf(o) != -1) {
                    r.push(this)
                }
            });
            return r
        }
    }

    function f(o) {
        o = o || window.event;
        if (o.preventDefault) {
            o.stopPropagation();
            o.preventDefault()
        } else {
            o.returnValue = false;
            o.cancelBubble = true
        }
        return false
    }

    function j(q, o, p) {
        q[o] = q[o] || [];
        q[o].push(p)
    }

    function e() {
        return "_" + ("" + Math.random()).slice(2, 10)
    }
    var h = function(t, r, s) {
        var q = this,
            p = {},
            u = {};
        q.index = r;
        if (typeof t == "string") {
            t = {
                url: t
            }
        }
        i(this, t, true);
        m(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","), function() {
            var v = "on" + this;
            if (v.indexOf("*") != -1) {
                v = v.slice(0, v.length - 1);
                var w = "onBefore" + v.slice(2);
                q[w] = function(x) {
                    j(u, w, x);
                    return q
                }
            }
            q[v] = function(x) {
                j(u, v, x);
                return q
            };
            if (r == -1) {
                if (q[w]) {
                    s[w] = q[w]
                }
                if (q[v]) {
                    s[v] = q[v]
                }
            }
        });
        i(this, {
            onCuepoint: function(x, w) {
                if (arguments.length == 1) {
                    p.embedded = [null, x];
                    return q
                }
                if (typeof x == "number") {
                    x = [x]
                }
                var v = e();
                p[v] = [x, w];
                if (s.isLoaded()) {
                    s._api().fp_addCuepoints(x, r, v)
                }
                return q
            },
            update: function(w) {
                i(q, w);
                if (s.isLoaded()) {
                    s._api().fp_updateClip(w, r)
                }
                var v = s.getConfig();
                var x = (r == -1) ? v.clip : v.playlist[r];
                i(x, w, true)
            },
            _fireEvent: function(v, y, w, A) {
                if (v == "onLoad") {
                    m(p, function(B, C) {
                        if (C[0]) {
                            s._api().fp_addCuepoints(C[0], r, B)
                        }
                    });
                    return false
                }
                A = A || q;
                if (v == "onCuepoint") {
                    var z = p[y];
                    if (z) {
                        return z[1].call(s, A, w)
                    }
                }
                if (y && "onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v) != -1) {
                    i(A, y);
                    if (y.metaData) {
                        if (!A.duration) {
                            A.duration = y.metaData.duration
                        } else {
                            A.fullDuration = y.metaData.duration
                        }
                    }
                }
                var x = true;
                m(u[v], function() {
                    x = this.call(s, A, y, w)
                });
                return x
            }
        });
        if (t.onCuepoint) {
            var o = t.onCuepoint;
            q.onCuepoint.apply(q, typeof o == "function" ? [o] : o);
            delete t.onCuepoint
        }
        m(t, function(v, w) {
            if (typeof w == "function") {
                j(u, v, w);
                delete t[v]
            }
        });
        if (r == -1) {
            s.onCuepoint = this.onCuepoint
        }
    };
    var l = function(p, r, q, t) {
        var o = this,
            s = {},
            u = false;
        if (t) {
            i(s, t)
        }
        m(r, function(v, w) {
            if (typeof w == "function") {
                s[v] = w;
                delete r[v]
            }
        });
        i(this, {
            animate: function(y, z, x) {
                if (!y) {
                    return o
                }
                if (typeof z == "function") {
                    x = z;
                    z = 500
                }
                if (typeof y == "string") {
                    var w = y;
                    y = {};
                    y[w] = z;
                    z = 500
                }
                if (x) {
                    var v = e();
                    s[v] = x
                }
                if (z === undefined) {
                    z = 500
                }
                r = q._api().fp_animate(p, y, z, v);
                return o
            },
            css: function(w, x) {
                if (x !== undefined) {
                    var v = {};
                    v[w] = x;
                    w = v
                }
                r = q._api().fp_css(p, w);
                i(o, r);
                return o
            },
            show: function() {
                this.display = "block";
                q._api().fp_showPlugin(p);
                return o
            },
            hide: function() {
                this.display = "none";
                q._api().fp_hidePlugin(p);
                return o
            },
            toggle: function() {
                this.display = q._api().fp_togglePlugin(p);
                return o
            },
            fadeTo: function(y, x, w) {
                if (typeof x == "function") {
                    w = x;
                    x = 500
                }
                if (w) {
                    var v = e();
                    s[v] = w
                }
                this.display = q._api().fp_fadeTo(p, y, x, v);
                this.opacity = y;
                return o
            },
            fadeIn: function(w, v) {
                return o.fadeTo(1, w, v)
            },
            fadeOut: function(w, v) {
                return o.fadeTo(0, w, v)
            },
            getName: function() {
                return p
            },
            getPlayer: function() {
                return q
            },
            _fireEvent: function(w, v, x) {
                if (w == "onUpdate") {
                    var z = q._api().fp_getPlugin(p);
                    if (!z) {
                        return
                    }
                    i(o, z);
                    delete o.methods;
                    if (!u) {
                        m(z.methods, function() {
                            var B = "" + this;
                            o[B] = function() {
                                var C = [].slice.call(arguments);
                                var D = q._api().fp_invoke(p, B, C);
                                return D === "undefined" || D === undefined ? o : D
                            }
                        });
                        u = true
                    }
                }
                var A = s[w];
                if (A) {
                    var y = A.apply(o, v);
                    if (w.slice(0, 1) == "_") {
                        delete s[w]
                    }
                    return y
                }
                return o
            }
        })
    };

    function b(q, G, t) {
        var w = this,
            v = null,
            D = false,
            u, s, F = [],
            y = {},
            x = {},
            E, r, p, C, o, A;
        i(w, {
            id: function() {
                return E
            },
            isLoaded: function() {
                return (v !== null && v.fp_play !== undefined && !D)
            },
            getParent: function() {
                return q
            },
            hide: function(H) {
                if (H) {
                    q.style.height = "0px"
                }
                if (w.isLoaded()) {
                    v.style.height = "0px"
                }
                return w
            },
            show: function() {
                q.style.height = A + "px";
                if (w.isLoaded()) {
                    v.style.height = o + "px"
                }
                return w
            },
            isHidden: function() {
                return w.isLoaded() && parseInt(v.style.height, 10) === 0
            },
            load: function(J) {
                if (!w.isLoaded() && w._fireEvent("onBeforeLoad") !== false) {
                    var H = function() {
                        u = q.innerHTML;
                        if (u && !flashembed.isSupported(G.version)) {
                            q.innerHTML = ""
                        }
                        if (J) {
                            J.cached = true;
                            j(x, "onLoad", J)
                        }
                        flashembed(q, G, {
                            config: t
                        })
                    };
                    var I = 0;
                    m(a, function() {
                        this.unload(function(K) {
                            if (++I == a.length) {
                                H()
                            }
                        })
                    })
                }
                return w
            },
            unload: function(J) {
                if (this.isFullscreen() && /WebKit/i.test(navigator.userAgent)) {
                    if (J) {
                        J(false)
                    }
                    return w
                }
                if (u.replace(/\s/g, "") !== "") {
                    if (w._fireEvent("onBeforeUnload") === false) {
                        if (J) {
                            J(false)
                        }
                        return w
                    }
                    D = true;
                    try {
                        if (v) {
                            v.fp_close();
                            w._fireEvent("onUnload")
                        }
                    } catch (H) {}
                    var I = function() {
                        v = null;
                        q.innerHTML = u;
                        D = false;
                        if (J) {
                            J(true)
                        }
                    };
                    setTimeout(I, 50)
                } else {
                    if (J) {
                        J(false)
                    }
                }
                return w
            },
            getClip: function(H) {
                if (H === undefined) {
                    H = C
                }
                return F[H]
            },
            getCommonClip: function() {
                return s
            },
            getPlaylist: function() {
                return F
            },
            getPlugin: function(H) {
                var J = y[H];
                if (!J && w.isLoaded()) {
                    var I = w._api().fp_getPlugin(H);
                    if (I) {
                        J = new l(H, I, w);
                        y[H] = J
                    }
                }
                return J
            },
            getScreen: function() {
                return w.getPlugin("screen")
            },
            getControls: function() {
                return w.getPlugin("controls")._fireEvent("onUpdate")
            },
            getLogo: function() {
                try {
                    return w.getPlugin("logo")._fireEvent("onUpdate")
                } catch (H) {}
            },
            getPlay: function() {
                return w.getPlugin("play")._fireEvent("onUpdate")
            },
            getConfig: function(H) {
                return H ? k(t) : t
            },
            getFlashParams: function() {
                return G
            },
            loadPlugin: function(K, J, M, L) {
                if (typeof M == "function") {
                    L = M;
                    M = {}
                }
                var I = L ? e() : "_";
                w._api().fp_loadPlugin(K, J, M, I);
                var H = {};
                H[I] = L;
                var N = new l(K, null, w, H);
                y[K] = N;
                return N
            },
            getState: function() {
                return w.isLoaded() ? v.fp_getState() : -1
            },
            play: function(I, H) {
                var J = function() {
                    if (I !== undefined) {
                        w._api().fp_play(I, H)
                    } else {
                        w._api().fp_play()
                    }
                };
                if (w.isLoaded()) {
                    J()
                } else {
                    if (D) {
                        setTimeout(function() {
                            w.play(I, H)
                        }, 50)
                    } else {
                        w.load(function() {
                            J()
                        })
                    }
                }
                return w
            },
            getVersion: function() {
                var I = "flowplayer.js 3.2.6";
                if (w.isLoaded()) {
                    var H = v.fp_getVersion();
                    H.push(I);
                    return H
                }
                return I
            },
            _api: function() {
                if (!w.isLoaded()) {
                    throw "Flowplayer " + w.id() + " not loaded when calling an API method"
                }
                return v
            },
            setClip: function(H) {
                w.setPlaylist([H]);
                return w
            },
            getIndex: function() {
                return p
            },
            _swfHeight: function() {
                return v.clientHeight
            }
        });
        m(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","), function() {
            var H = "on" + this;
            if (H.indexOf("*") != -1) {
                H = H.slice(0, H.length - 1);
                var I = "onBefore" + H.slice(2);
                w[I] = function(J) {
                    j(x, I, J);
                    return w
                }
            }
            w[H] = function(J) {
                j(x, H, J);
                return w
            }
        });
        m(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","), function() {
            var H = this;
            w[H] = function(J, I) {
                if (!w.isLoaded()) {
                    return w
                }
                var K = null;
                if (J !== undefined && I !== undefined) {
                    K = v["fp_" + H](J, I)
                } else {
                    K = (J === undefined) ? v["fp_" + H]() : v["fp_" + H](J)
                }
                return K === "undefined" || K === undefined ? w : K
            }
        });
        w._fireEvent = function(Q) {
            if (typeof Q == "string") {
                Q = [Q]
            }
            var R = Q[0],
                O = Q[1],
                M = Q[2],
                L = Q[3],
                K = 0;
            if (t.debug) {
                g(Q)
            }
            if (!w.isLoaded() && R == "onLoad" && O == "player") {
                v = v || c(r);
                o = w._swfHeight();
                m(F, function() {
                    this._fireEvent("onLoad")
                });
                m(y, function(S, T) {
                    T._fireEvent("onUpdate")
                });
                s._fireEvent("onLoad")
            }
            if (R == "onLoad" && O != "player") {
                return
            }
            if (R == "onError") {
                if (typeof O == "string" || (typeof O == "number" && typeof M == "number")) {
                    O = M;
                    M = L
                }
            }
            if (R == "onContextMenu") {
                m(t.contextMenu[O], function(S, T) {
                    T.call(w)
                });
                return
            }
            if (R == "onPluginEvent" || R == "onBeforePluginEvent") {
                var H = O.name || O;
                var I = y[H];
                if (I) {
                    I._fireEvent("onUpdate", O);
                    return I._fireEvent(M, Q.slice(3))
                }
                return
            }
            if (R == "onPlaylistReplace") {
                F = [];
                var N = 0;
                m(O, function() {
                    F.push(new h(this, N++, w))
                })
            }
            if (R == "onClipAdd") {
                if (O.isInStream) {
                    return
                }
                O = new h(O, M, w);
                F.splice(M, 0, O);
                for (K = M + 1; K < F.length; K++) {
                    F[K].index++
                }
            }
            var P = true;
            if (typeof O == "number" && O < F.length) {
                C = O;
                var J = F[O];
                if (J) {
                    P = J._fireEvent(R, M, L)
                }
                if (!J || P !== false) {
                    P = s._fireEvent(R, M, L, J)
                }
            }
            m(x[R], function() {
                P = this.call(w, O, M);
                if (this.cached) {
                    x[R].splice(K, 1)
                }
                if (P === false) {
                    return false
                }
                K++
            });
            return P
        };

        function B() {
            if ($f(q)) {
                $f(q).getParent().innerHTML = "";
                p = $f(q).getIndex();
                a[p] = w
            } else {
                a.push(w);
                p = a.length - 1
            }
            A = parseInt(q.style.height, 10) || q.clientHeight;
            E = q.id || "fp" + e();
            r = G.id || E + "_api";
            G.id = r;
            t.playerId = E;
            if (typeof t == "string") {
                t = {
                    clip: {
                        url: t
                    }
                }
            }
            if (typeof t.clip == "string") {
                t.clip = {
                    url: t.clip
                }
            }
            t.clip = t.clip || {};
            if (q.getAttribute("href", 2) && !t.clip.url) {
                t.clip.url = q.getAttribute("href", 2)
            }
            s = new h(t.clip, -1, w);
            t.playlist = t.playlist || [t.clip];
            var I = 0;
            m(t.playlist, function() {
                var K = this;
                if (typeof K == "object" && K.length) {
                    K = {
                        url: "" + K
                    }
                }
                m(t.clip, function(L, M) {
                    if (M !== undefined && K[L] === undefined && typeof M != "function") {
                        K[L] = M
                    }
                });
                t.playlist[I] = K;
                K = new h(K, I, w);
                F.push(K);
                I++
            });
            m(t, function(K, L) {
                if (typeof L == "function") {
                    if (s[K]) {
                        s[K](L)
                    } else {
                        j(x, K, L)
                    }
                    delete t[K]
                }
            });
            m(t.plugins, function(K, L) {
                if (L) {
                    y[K] = new l(K, L, w)
                }
            });
            if (!t.plugins || t.plugins.controls === undefined) {
                y.controls = new l("controls", null, w)
            }
            y.canvas = new l("canvas", null, w);
            u = q.innerHTML;

            function J(L) {
                var K = w.hasiPadSupport && w.hasiPadSupport();
                if (/iPad|iPhone|iPod/i.test(navigator.userAgent) && !/.flv$/i.test(F[0].url) && !K) {
                    return true
                }
                if (!w.isLoaded() && w._fireEvent("onBeforeClick") !== false) {
                    w.load()
                }
                return f(L)
            }

            function H() {
                if (u.replace(/\s/g, "") !== "") {
                    if (q.addEventListener) {
                        q.addEventListener("click", J, false)
                    } else {
                        if (q.attachEvent) {
                            q.attachEvent("onclick", J)
                        }
                    }
                } else {
                    if (q.addEventListener) {
                        q.addEventListener("click", f, false)
                    }
                    w.load()
                }
            }
            setTimeout(H, 0)
        }
        if (typeof q == "string") {
            var z = c(q);
            if (!z) {
                throw "Flowplayer cannot access element: " + q
            }
            q = z;
            B()
        } else {
            B()
        }
    }
    var a = [];

    function d(o) {
        this.length = o.length;
        this.each = function(p) {
            m(o, p)
        };
        this.size = function() {
            return o.length
        }
    }
    window.flowplayer = window.$f = function() {
        var p = null;
        var o = arguments[0];
        if (!arguments.length) {
            m(a, function() {
                if (this.isLoaded()) {
                    p = this;
                    return false
                }
            });
            return p || a[0]
        }
        if (arguments.length == 1) {
            if (typeof o == "number") {
                return a[o]
            } else {
                if (o == "*") {
                    return new d(a)
                }
                m(a, function() {
                    if (this.id() == o.id || this.id() == o || this.getParent() == o) {
                        p = this;
                        return false
                    }
                });
                return p
            }
        }
        if (arguments.length > 1) {
            var t = arguments[1],
                q = (arguments.length == 3) ? arguments[2] : {};
            if (typeof t == "string") {
                t = {
                    src: t
                }
            }
            t = i({
                bgcolor: "#000000",
                version: [9, 0],
                expressInstall: "http://static.flowplayer.org/swf/expressinstall.swf",
                cachebusting: false
            }, t);
            if (typeof o == "string") {
                if (o.indexOf(".") != -1) {
                    var s = [];
                    m(n(o), function() {
                        s.push(new b(this, k(t), k(q)))
                    });
                    return new d(s)
                } else {
                    var r = c(o);
                    return new b(r !== null ? r : o, t, q)
                }
            } else {
                if (o) {
                    return new b(o, t, q)
                }
            }
        }
        return null
    };
    i(window.$f, {
        fireEvent: function() {
            var o = [].slice.call(arguments);
            var q = $f(o[0]);
            return q ? q._fireEvent(o.slice(1)) : null
        },
        addPlugin: function(o, p) {
            b.prototype[o] = p;
            return $f
        },
        each: m,
        extend: i
    });
    if (typeof jQuery == "function") {
        jQuery.fn.flowplayer = function(q, p) {
            if (!arguments.length || typeof arguments[0] == "number") {
                var o = [];
                this.each(function() {
                    var r = $f(this);
                    if (r) {
                        o.push(r)
                    }
                });
                return arguments.length ? o[arguments[0]] : new d(o)
            }
            return this.each(function() {
                $f(this, k(q), p ? k(p) : {})
            })
        }
    }
})();
(function() {
    var e = typeof jQuery == "function";
    var i = {
        width: "100%",
        height: "100%",
        allowfullscreen: true,
        allowscriptaccess: "always",
        quality: "high",
        version: null,
        onFail: null,
        expressInstall: null,
        w3c: false,
        cachebusting: false
    };
    if (e) {
        jQuery.tools = jQuery.tools || {};
        jQuery.tools.flashembed = {
            version: "1.0.4",
            conf: i
        }
    }

    function j() {
        if (c.done) {
            return false
        }
        var l = document;
        if (l && l.getElementsByTagName && l.getElementById && l.body) {
            clearInterval(c.timer);
            c.timer = null;
            for (var k = 0; k < c.ready.length; k++) {
                c.ready[k].call()
            }
            c.ready = null;
            c.done = true
        }
    }
    var c = e ? jQuery : function(k) {
        if (c.done) {
            return k()
        }
        if (c.timer) {
            c.ready.push(k)
        } else {
            c.ready = [k];
            c.timer = setInterval(j, 13)
        }
    };

    function f(l, k) {
        if (k) {
            for (key in k) {
                if (k.hasOwnProperty(key)) {
                    l[key] = k[key]
                }
            }
        }
        return l
    }

    function g(k) {
        switch (h(k)) {
            case "string":
                k = k.replace(new RegExp('(["\\\\])', "g"), "\\$1");
                k = k.replace(/^\s?(\d+)%/, "$1pct");
                return '"' + k + '"';
            case "array":
                return "[" + b(k, function(n) {
                    return g(n)
                }).join(",") + "]";
            case "function":
                return '"function()"';
            case "object":
                var l = [];
                for (var m in k) {
                    if (k.hasOwnProperty(m)) {
                        l.push('"' + m + '":' + g(k[m]))
                    }
                }
                return "{" + l.join(",") + "}"
        }
        return String(k).replace(/\s/g, " ").replace(/\'/g, '"')
    }

    function h(l) {
        if (l === null || l === undefined) {
            return false
        }
        var k = typeof l;
        return (k == "object" && l.push) ? "array" : k
    }
    if (window.attachEvent) {
        window.attachEvent("onbeforeunload", function() {
            __flash_unloadHandler = function() {};
            __flash_savedUnloadHandler = function() {}
        })
    }

    function b(k, n) {
        var m = [];
        for (var l in k) {
            if (k.hasOwnProperty(l)) {
                m[l] = n(k[l])
            }
        }
        return m
    }

    function a(r, t) {
        var q = f({}, r);
        var s = document.all;
        var n = '<object width="' + q.width + '" height="' + q.height + '"';
        if (s && !q.id) {
            q.id = "_" + ("" + Math.random()).substring(9)
        }
        if (q.id) {
            n += ' id="' + q.id + '"'
        }
        if (q.cachebusting) {
            q.src += ((q.src.indexOf("?") != -1 ? "&" : "?") + Math.random())
        }
        if (q.w3c || !s) {
            n += ' data="' + q.src + '" type="application/x-shockwave-flash"'
        } else {
            n += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
        }
        n += ">";
        if (q.w3c || s) {
            n += '<param name="movie" value="' + q.src + '" />'
        }
        q.width = q.height = q.id = q.w3c = q.src = null;
        for (var l in q) {
            if (q[l] !== null) {
                n += '<param name="' + l + '" value="' + q[l] + '" />'
            }
        }
        var o = "";
        if (t) {
            for (var m in t) {
                if (t[m] !== null) {
                    o += m + "=" + (typeof t[m] == "object" ? g(t[m]) : t[m]) + "&"
                }
            }
            o = o.substring(0, o.length - 1);
            n += '<param name="flashvars" value=\'' + o + "' />"
        }
        n += "</object>";
        return n
    }

    function d(m, p, l) {
        var k = flashembed.getVersion();
        f(this, {
            getContainer: function() {
                return m
            },
            getConf: function() {
                return p
            },
            getVersion: function() {
                return k
            },
            getFlashvars: function() {
                return l
            },
            getApi: function() {
                return m.firstChild
            },
            getHTML: function() {
                return a(p, l)
            }
        });
        var q = p.version;
        var r = p.expressInstall;
        var o = !q || flashembed.isSupported(q);
        if (o) {
            p.onFail = p.version = p.expressInstall = null;
            m.innerHTML = a(p, l)
        } else {
            if (q && r && flashembed.isSupported([6, 65])) {
                f(p, {
                    src: r
                });
                l = {
                    MMredirectURL: location.href,
                    MMplayerType: "PlugIn",
                    MMdoctitle: document.title
                };
                m.innerHTML = a(p, l)
            } else {
                if (m.innerHTML.replace(/\s/g, "") !== "") {} else {
                    m.innerHTML = "<h2>Flash version " + q + " or greater is required</h2><h3>" + (k[0] > 0 ? "Your version is " + k : "You have no flash plugin installed") + "</h3>" + (m.tagName == "A" ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='http://www.adobe.com/go/getflashplayer'>here</a></p>");
                    if (m.tagName == "A") {
                        m.onclick = function() {
                            location.href = "http://www.adobe.com/go/getflashplayer"
                        }
                    }
                }
            }
        } if (!o && p.onFail) {
            var n = p.onFail.call(this);
            if (typeof n == "string") {
                m.innerHTML = n
            }
        }
        if (document.all) {
            window[p.id] = document.getElementById(p.id)
        }
    }
    window.flashembed = function(l, m, k) {
        if (typeof l == "string") {
            var n = document.getElementById(l);
            if (n) {
                l = n
            } else {
                c(function() {
                    flashembed(l, m, k)
                });
                return
            }
        }
        if (!l) {
            return
        }
        if (typeof m == "string") {
            m = {
                src: m
            }
        }
        var o = f({}, i);
        f(o, m);
        return new d(l, o, k)
    };
    f(window.flashembed, {
        getVersion: function() {
            var m = [0, 0];
            if (navigator.plugins && typeof navigator.plugins["Shockwave Flash"] == "object") {
                var l = navigator.plugins["Shockwave Flash"].description;
                if (typeof l != "undefined") {
                    l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    var n = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10);
                    var r = /r/.test(l) ? parseInt(l.replace(/^.*r(.*)$/, "$1"), 10) : 0;
                    m = [n, r]
                }
            } else {
                if (window.ActiveXObject) {
                    try {
                        var p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (q) {
                        try {
                            p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                            m = [6, 0];
                            p.AllowScriptAccess = "always"
                        } catch (k) {
                            if (m[0] == 6) {
                                return m
                            }
                        }
                        try {
                            p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                        } catch (o) {}
                    }
                    if (typeof p == "object") {
                        l = p.GetVariable("$version");
                        if (typeof l != "undefined") {
                            l = l.replace(/^\S+\s+(.*)$/, "$1").split(",");
                            m = [parseInt(l[0], 10), parseInt(l[2], 10)]
                        }
                    }
                }
            }
            return m
        },
        isSupported: function(k) {
            var m = flashembed.getVersion();
            var l = (m[0] > k[0]) || (m[0] == k[0] && m[1] >= k[1]);
            return l
        },
        domReady: c,
        asString: g,
        getHTML: a
    });
    if (e) {
        jQuery.fn.flashembed = function(l, k) {
            var m = null;
            this.each(function() {
                m = flashembed(this, l, k)
            });
            return l.api === false ? this : m
        }
    }
})();


/**
 * jQuery Masonry v2.1.05
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function(a, b, c) {
    "use strict";
    var d = b.event,
        e;
    d.special.smartresize = {
        setup: function() {
            b(this).bind("resize", d.special.smartresize.handler)
        },
        teardown: function() {
            b(this).unbind("resize", d.special.smartresize.handler)
        },
        handler: function(a, c) {
            var d = this,
                f = arguments;
            a.type = "smartresize", e && clearTimeout(e), e = setTimeout(function() {
                b.event.handle.apply(d, f)
            }, c === "execAsap" ? 0 : 100)
        }
    }, b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Mason = function(a, c) {
        this.element = b(c), this._create(a), this._init()
    }, b.Mason.settings = {
        isResizable: !0,
        isAnimated: !1,
        animationOptions: {
            queue: !1,
            duration: 500
        },
        gutterWidth: 0,
        isRTL: !1,
        isFitWidth: !1,
        containerStyle: {
            position: "relative"
        }
    }, b.Mason.prototype = {
        _filterFindBricks: function(a) {
            var b = this.options.itemSelector;
            return b ? a.filter(b).add(a.find(b)) : a
        },
        _getBricks: function(a) {
            var b = this._filterFindBricks(a).css({
                position: "absolute"
            }).addClass("masonry-brick");
            return b
        },
        _create: function(c) {
            this.options = b.extend(!0, {}, b.Mason.settings, c), this.styleQueue = [];
            var d = this.element[0].style;
            this.originalStyle = {
                height: d.height || ""
            };
            var e = this.options.containerStyle;
            for (var f in e) this.originalStyle[f] = d[f] || "";
            this.element.css(e), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {
                x: parseInt(this.element.css("padding-" + this.horizontalDirection), 10),
                y: parseInt(this.element.css("padding-top"), 10)
            }, this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
            var g = this;
            setTimeout(function() {
                g.element.addClass("masonry")
            }, 0), this.options.isResizable && b(a).bind("smartresize.masonry", function() {
                g.resize()
            }), this.reloadItems()
        },
        _init: function(a) {
            this._getColumns(), this._reLayout(a)
        },
        option: function(a, c) {
            b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a))
        },
        layout: function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) this._placeBrick(a[c]);
            var e = {};
            e.height = Math.max.apply(Math, this.colYs);
            if (this.options.isFitWidth) {
                var f = 0;
                c = this.cols;
                while (--c) {
                    if (this.colYs[c] !== 0) break;
                    f++
                }
                e.width = (this.cols - f) * this.columnWidth - this.options.gutterWidth
            }
            this.styleQueue.push({
                $el: this.element,
                style: e
            });
            var g = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css",
                h = this.options.animationOptions,
                i;
            for (c = 0, d = this.styleQueue.length; c < d; c++) i = this.styleQueue[c], i.$el[g](i.style, h);
            this.styleQueue = [], b && b.call(a), this.isLaidOut = !0
        },
        _getColumns: function() {
            var a = this.options.isFitWidth ? this.element.parent() : this.element,
                b = a.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(b) : this.options.columnWidth || this.$bricks.outerWidth(!0) || b, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((b + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        },
        _placeBrick: function(a) {
            var c = b(a),
                d, e, f, g, h;
            d = Math.ceil(c.outerWidth(!0) / this.columnWidth), d = Math.min(d, this.cols);
            if (d === 1) f = this.colYs;
            else {
                e = this.cols + 1 - d, f = [];
                for (h = 0; h < e; h++) g = this.colYs.slice(h, h + d), f[h] = Math.max.apply(Math, g)
            }
            var i = Math.min.apply(Math, f),
                j = 0;
            for (var k = 0, l = f.length; k < l; k++)
                if (f[k] === i) {
                    j = k;
                    break
                }
            var m = {
                top: i + this.offset.y
            };
            m[this.horizontalDirection] = this.columnWidth * j + this.offset.x, this.styleQueue.push({
                $el: c,
                style: m
            });
            var n = i + c.outerHeight(!0),
                o = this.cols + 1 - l;
            for (k = 0; k < o; k++) this.colYs[j + k] = n
        },
        resize: function() {
            var a = this.cols;
            this._getColumns(), (this.isFluid || this.cols !== a) && this._reLayout()
        },
        _reLayout: function(a) {
            var b = this.cols;
            this.colYs = [];
            while (b--) this.colYs.push(0);
            this.layout(this.$bricks, a)
        },
        reloadItems: function() {
            this.$bricks = this._getBricks(this.element.children())
        },
        reload: function(a) {
            this.reloadItems(), this._init(a)
        },
        appended: function(a, b, c) {
            if (b) {
                this._filterFindBricks(a).css({
                    top: this.element.height()
                });
                var d = this;
                setTimeout(function() {
                    d._appended(a, c)
                }, 1)
            } else this._appended(a, c)
        },
        _appended: function(a, b) {
            var c = this._getBricks(a);
            this.$bricks = this.$bricks.add(c), this.layout(c, b)
        },
        remove: function(a) {
            this.$bricks = this.$bricks.not(a), a.remove()
        },
        destroy: function() {
            this.$bricks.removeClass("masonry-brick").each(function() {
                this.style.position = "", this.style.top = "", this.style.left = ""
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), b(a).unbind(".masonry")
        }
    }, b.fn.imagesLoaded = function(a) {
        function h() {
            a.call(c, d)
        }

        function i(a) {
            var c = a.target;
            c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
        }
        var c = this,
            d = c.find("img").add(c.filter("img")),
            e = d.length,
            f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            g = [];
        return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
            var a = this.src;
            this.src = f, this.src = a
        }), c
    };
    var f = function(b) {
        a.console && a.console.error(b)
    };
    b.fn.masonry = function(a) {
        if (typeof a == "string") {
            var c = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var d = b.data(this, "masonry");
                if (!d) {
                    f("cannot call methods on masonry prior to initialization; attempted to call method '" + a + "'");
                    return
                }
                if (!b.isFunction(d[a]) || a.charAt(0) === "_") {
                    f("no such method '" + a + "' for masonry instance");
                    return
                }
                d[a].apply(d, c)
            })
        } else this.each(function() {
            var c = b.data(this, "masonry");
            c ? (c.option(a || {}), c._init()) : b.data(this, "masonry", new b.Mason(a, this))
        });
        return this
    }
})(window, jQuery);


/*
 * ipad.js 3.2.2. The Flowplayer ipad/iphone fallback.
 *
 * Copyright 2010, 2011 Flowplayer Oy
 * By Thomas Dubois <thomas@flowplayer.org>
 *
 * This file is part of Flowplayer.
 *
 * Flowplayer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Flowplayer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Flowplayer.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Date: 2011-01-10 07:50:57 -0500 (Mon, 10 Jan 2011)
 * Revision: 4901
 */
$f.addPlugin("ipad", function(t) {
    var L = -1;
    var u = 0;
    var v = 1;
    var J = 2;
    var z = 3;
    var F = 4;
    var g = 5;
    var f = this;
    var N = 1;
    var M = false;
    var C = false;
    var q = false;
    var o = 0;
    var K = [];
    var c = {
        accelerated: false,
        autoBuffering: false,
        autoPlay: true,
        baseUrl: null,
        bufferLength: 3,
        connectionProvider: null,
        cuepointMultiplier: 1000,
        cuepoints: [],
        controls: {},
        duration: 0,
        extension: "",
        fadeInSpeed: 1000,
        fadeOutSpeed: 1000,
        image: false,
        linkUrl: null,
        linkWindow: "_self",
        live: false,
        metaData: {},
        originalUrl: null,
        position: 0,
        playlist: [],
        provider: "http",
        scaling: "scale",
        seekableOnBegin: false,
        start: 0,
        url: null,
        urlResolvers: []
    };
    var s = L;
    var m = L;
    var p = /iPad|iPhone|iPod/i.test(navigator.userAgent);
    var b = null;

    function j(R, Q, O) {
        if (Q) {
            for (key in Q) {
                if (key) {
                    if (Q[key] && typeof Q[key] == "function" && !O) {
                        continue
                    }
                    if (Q[key] && typeof Q[key] == "object" && Q[key].length == undefined) {
                        var P = {};
                        j(P, Q[key]);
                        R[key] = P
                    } else {
                        R[key] = Q[key]
                    }
                }
            }
        }
        return R
    }
    var w = {
        simulateiDevice: false,
        controlsSizeRatio: 1.5,
        controls: true,
        debug: false,
        validExtensions: /mov|m4v|mp4|avi/gi
    };
    j(w, t);

    function e() {
        if (w.debug) {
            if (p) {
                var O = [].splice.call(arguments, 0).join(", ");
                console.log.apply(console, [O])
            } else {
                console.log.apply(console, arguments)
            }
        }
    }

    function i(O) {
        switch (O) {
            case -1:
                return "UNLOADED";
            case 0:
                return "LOADED";
            case 1:
                return "UNSTARTED";
            case 2:
                return "BUFFERING";
            case 3:
                return "PLAYING";
            case 4:
                return "PAUSED";
            case 5:
                return "ENDED"
        }
        return "UNKOWN"
    }

    function D(O) {
        var P = $f.fireEvent(f.id(), "onBefore" + O, o);
        return P !== false
    }

    function H(O) {
        O.stopPropagation();
        O.preventDefault();
        return false
    }

    function G(P, O) {
        if (s == L && !O) {
            return
        }
        m = s;
        s = P;
        y();
        if (P == z) {
            l()
        }
        e(i(P))
    }

    function x() {
        b.fp_stop();
        M = false;
        C = false;
        q = false;
        G(v);
        G(v)
    }
    var d = null;

    function l() {
        if (d) {
            return
        }
        console.log("starting tracker");
        d = setInterval(A, 100);
        A()
    }

    function y() {
        clearInterval(d);
        d = null
    }

    function A() {
        var P = Math.floor(b.fp_getTime() * 10) * 100;
        var Q = Math.floor(b.duration * 10) * 100;
        var R = (new Date()).time;

        function O(U, S) {
            U = U >= 0 ? U : Q - Math.abs(U);
            for (var T = 0; T < S.length; T++) {
                if (S[T].lastTimeFired > R) {
                    S[T].lastTimeFired = -1
                } else {
                    if (S[T].lastTimeFired + 500 > R) {
                        continue
                    } else {
                        if (U == P || (P - 500 < U && P > U)) {
                            S[T].lastTimeFired = R;
                            $f.fireEvent(f.id(), "onCuepoint", o, S[T].fnId, S[T].parameters)
                        }
                    }
                }
            }
        }
        $f.each(f.getCommonClip()._cuepoints, O);
        $f.each(K[o]._cuepoints, O)
    }

    function B() {
        x();
        q = true;
        b.fp_seek(0)
    }

    function I(O) {}

    function n() {
        function O(Q) {
            var P = {};
            j(P, c);
            j(P, f.getCommonClip());
            j(P, Q);
            if (P.ipadUrl) {
                url = decodeURIComponent(P.ipadUrl)
            } else {
                if (P.url) {
                    url = P.url
                }
            } if (url && url.indexOf("://") == -1 && P.baseUrl) {
                url = P.baseUrl + "/" + url
            }
            P.originalUrl = P.url;
            P.completeUrl = url;
            P.extension = P.completeUrl.substr(P.completeUrl.lastIndexOf("."));
            P.type = "video";
            delete P.index;
            e("fixed clip", P);
            return P
        }
        b.fp_play = function(S, Q, U) {
            var P = null;
            var T = true;
            var R = true;
            e("Calling play() " + S, S);
            if (Q) {
                e("ERROR: inStream clips not yet supported");
                return
            }
            if (S !== undefined) {
                if (typeof S == "number") {
                    if (o >= K.length) {
                        return
                    }
                    o = S;
                    S = K[o]
                } else {
                    if (typeof S == "string") {
                        S = {
                            url: S
                        }
                    }
                    b.fp_setPlaylist(S.length !== undefined ? S : [S])
                } if (!w.validExtensions.test(K[o].extension)) {
                    if (K.length > 1 && o < (K.length - 1)) {
                        e("Not last clip in the playlist, moving to next one");
                        b.fp_play(++o, false, true)
                    }
                    return
                }
                S = K[o];
                P = S.completeUrl;
                if (S.autoBuffering !== undefined && S.autoBuffering === false) {
                    T = false
                }
                if (S.autoPlay === undefined || S.autoPlay === true || U === true) {
                    T = true;
                    R = true
                } else {
                    R = false
                }
            } else {
                e("clip was not given, simply calling video.play, if not already buffering");
                if (s != J) {
                    b.play()
                }
                return
            }
            e("about to play " + P, T, R);
            x();
            if (P) {
                e("Changing SRC attribute" + P);
                b.setAttribute("src", P)
            }
            if (T) {
                if (!D("Begin")) {
                    return false
                }
                $f.fireEvent(f.id(), "onBegin", o);
                e("calling video.load()");
                b.load()
            }
            if (R) {
                e("calling video.play()");
                b.play()
            }
        };
        b.fp_pause = function() {
            e("pause called");
            if (!D("Pause")) {
                return false
            }
            b.pause()
        };
        b.fp_resume = function() {
            e("resume called");
            if (!D("Resume")) {
                return false
            }
            b.play()
        };
        b.fp_stop = function() {
            e("stop called");
            if (!D("Stop")) {
                return false
            }
            C = true;
            b.pause();
            try {
                b.currentTime = 0
            } catch (P) {}
        };
        b.fp_seek = function(P) {
            e("seek called " + P);
            if (!D("Seek")) {
                return false
            }
            var T = 0;
            var P = P + "";
            if (P.charAt(P.length - 1) == "%") {
                var Q = parseInt(P.substr(0, P.length - 1)) / 100;
                var S = b.duration;
                T = S * Q
            } else {
                T = P
            }
            try {
                b.currentTime = T
            } catch (R) {
                e("Wrong seek time")
            }
        };
        b.fp_getTime = function() {
            return b.currentTime
        };
        b.fp_mute = function() {
            e("mute called");
            if (!D("Mute")) {
                return false
            }
            N = b.volume;
            b.volume = 0
        };
        b.fp_unmute = function() {
            if (!D("Unmute")) {
                return false
            }
            b.volume = N
        };
        b.fp_getVolume = function() {
            return b.volume * 100
        };
        b.fp_setVolume = function(P) {
            if (!D("Volume")) {
                return false
            }
            b.volume = P / 100
        };
        b.fp_toggle = function() {
            e("toggle called");
            if (f.getState() == g) {
                B();
                return
            }
            if (b.paused) {
                b.fp_play()
            } else {
                b.fp_pause()
            }
        };
        b.fp_isPaused = function() {
            return b.paused
        };
        b.fp_isPlaying = function() {
            return !b.paused
        };
        b.fp_getPlugin = function(Q) {
            if (Q == "canvas" || Q == "controls") {
                var P = f.getConfig();
                return P.plugins && P.plugins[Q] ? P.plugins[Q] : null
            }
            e("ERROR: no support for " + Q + " plugin on iDevices");
            return null
        };
        b.fp_close = function() {
            G(L);
            b.parentNode.removeChild(b);
            b = null
        };
        b.fp_getStatus = function() {
            var Q = 0;
            var R = 0;
            try {
                Q = b.buffered.start();
                R = b.buffered.end()
            } catch (P) {}
            return {
                bufferStart: Q,
                bufferEnd: R,
                state: s,
                time: b.fp_getTime(),
                muted: b.muted,
                volume: b.fp_getVolume()
            }
        };
        b.fp_getState = function() {
            return s
        };
        b.fp_startBuffering = function() {
            if (s == v) {
                b.load()
            }
        };
        b.fp_setPlaylist = function(Q) {
            e("Setting playlist");
            o = 0;
            for (var P = 0; P < Q.length; P++) {
                Q[P] = O(Q[P])
            }
            K = Q;
            $f.fireEvent(f.id(), "onPlaylistReplace", Q)
        };
        b.fp_addClip = function(Q, P) {
            Q = O(Q);
            K.splice(P, 0, Q);
            $f.fireEvent(f.id(), "onClipAdd", Q, P)
        };
        b.fp_updateClip = function(Q, P) {
            j(K[P], Q);
            return K[P]
        };
        b.fp_getVersion = function() {
            return "3.2.3"
        };
        b.fp_isFullscreen = function() {
            return false
        };
        b.fp_toggleFullscreen = function() {
            if (b.fp_isFullscreen()) {
                b.webkitExitFullscreen()
            } else {
                b.webkitEnterFullscreen()
            }
        };
        b.fp_addCuepoints = function(S, Q, P) {
            var U = Q == -1 ? f.getCommonClip() : K[Q];
            U._cuepoints = U._cuepoints || {};
            S = S instanceof Array ? S : [S];
            for (var R = 0; R < S.length; R++) {
                var V = typeof S[R] == "object" ? (S[R]["time"] || null) : S[R];
                if (V == null) {
                    continue
                }
                V = Math.floor(V / 100) * 100;
                var T = V;
                if (typeof S[R] == "object") {
                    T = j({}, S[R], false);
                    if (T.time != undefined) {
                        delete T.time
                    }
                    if (T.parameters != undefined) {
                        j(T, T.parameters, false);
                        delete T.parameters
                    }
                }
                U._cuepoints[V] = U._cuepoints[V] || [];
                U._cuepoints[V].push({
                    fnId: P,
                    lastTimeFired: -1,
                    parameters: T
                })
            }
        };
        $f.each(("toggleFullscreen,stopBuffering,reset,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled,css,animate,showPlugin,hidePlugin,togglePlugin,fadeTo,invoke,loadPlugin").split(","), function() {
            var P = this;
            b["fp_" + P] = function() {
                e("ERROR: unsupported API on iDevices " + P);
                return false
            }
        })
    }

    function E() {
        var Z = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "volumechange", "waiting"];
        var R = function(ab) {
            e("Got event " + ab.type, ab)
        };
        for (var T = 0; T < Z.length; T++) {
            b.addEventListener(Z[T], R, false)
        }
        var O = function(ab) {
            e("got onBufferEmpty event " + ab.type);
            G(J);
            $f.fireEvent(f.id(), "onBufferEmpty", o)
        };
        b.addEventListener("emptied", O, false);
        b.addEventListener("waiting", O, false);
        var Q = function(ab) {
            if (m == v || m == J) {} else {
                e("Restoring old state " + i(m));
                G(m)
            }
            $f.fireEvent(f.id(), "onBufferFull", o)
        };
        b.addEventListener("canplay", Q, false);
        b.addEventListener("canplaythrough", Q, false);
        var P = function(ab) {
            b.fp_updateClip({
                duration: b.duration,
                metaData: {
                    duration: b.duration
                }
            }, o);
            K[o].duration = b.duration;
            $f.fireEvent(f.id(), "onMetaData", o, K[o])
        };
        b.addEventListener("loadedmetadata", P, false);
        b.addEventListener("durationchange", P, false);
        var Y = function(ab) {
            if (s == F) {
                if (!D("Resume")) {
                    e("Resume disallowed, pausing");
                    b.fp_pause();
                    return H(ab)
                }
                $f.fireEvent(f.id(), "onResume", o)
            }
            G(z);
            if (!M) {
                M = true;
                $f.fireEvent(f.id(), "onStart", o)
            }
        };
        b.addEventListener("playing", Y, false);
        var V = function(ab) {
            if (!D("Finish")) {
                if (K.length == 1) {
                    e("Active playlist only has one clip, onBeforeFinish returned false. Replaying");
                    B()
                } else {
                    if (o != (K.length - 1)) {
                        e("Not the last clip in the playlist, but onBeforeFinish returned false. Returning to the beginning of current clip");
                        b.fp_seek(0)
                    } else {
                        e("Last clip in playlist, but onBeforeFinish returned false, start again from the beginning");
                        b.fp_play(0)
                    }
                }
                return H(ab)
            }
            G(g);
            $f.fireEvent(f.id(), "onFinish", o);
            if (K.length > 1 && o < (K.length - 1)) {
                e("Not last clip in the playlist, moving to next one");
                b.fp_play(++o, false, true)
            }
        };
        b.addEventListener("ended", V, false);
        var U = function(ab) {
            G(u, true);
            $f.fireEvent(f.id(), "onError", o, 201);
            if (w.onFail && w.onFail instanceof Function) {
                w.onFail.apply(f, [])
            }
        };
        b.addEventListener("error", U, false);
        var X = function(ab) {
            e("got pause event from player" + f.id());
            if (C) {
                return
            }
            if (s == J && m == v) {
                e("forcing play");
                setTimeout(function() {
                    b.play()
                }, 0);
                return
            }
            if (!D("Pause")) {
                b.fp_resume();
                return H(ab)
            }
            G(F);
            $f.fireEvent(f.id(), "onPause", o)
        };
        b.addEventListener("pause", X, false);
        var aa = function(ab) {
            $f.fireEvent(f.id(), "onBeforeSeek", o)
        };
        b.addEventListener("seeking", aa, false);
        var S = function(ab) {
            if (C) {
                C = false;
                $f.fireEvent(f.id(), "onStop", o)
            } else {
                $f.fireEvent(f.id(), "onSeek", o)
            }
            e("seek done, currentState", i(s));
            if (q) {
                q = false;
                b.fp_play()
            } else {
                if (s != z) {
                    b.fp_pause()
                }
            }
        };
        b.addEventListener("seeked", S, false);
        var W = function(ab) {
            $f.fireEvent(f.id(), "onVolume", b.fp_getVolume())
        };
        b.addEventListener("volumechange", W, false)
    }

    function k() {
        b.fp_play(0)
    }

    function r() {}
    if (p || w.simulateiDevice) {
        if (!window.flashembed.__replaced) {
            var h = window.flashembed;
            window.flashembed = function(Q, V, R) {
                if (typeof Q == "string") {
                    Q = document.getElementById(Q.replace("#", ""))
                }
                if (!Q) {
                    return
                }
                var U = window.getComputedStyle(Q, null);
                var T = parseInt(U.width);
                var O = parseInt(U.height);
                while (Q.firstChild) {
                    Q.removeChild(Q.firstChild)
                }
                var P = document.createElement("div");
                var S = document.createElement("video");
                P.appendChild(S);
                Q.appendChild(P);
                P.style.height = O + "px";
                P.style.width = T + "px";
                P.style.display = "block";
                P.style.position = "relative";
                P.style.background = "-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.7)))";
                P.style.cursor = "default";
                P.style.webkitUserDrag = "none";
                S.style.height = "100%";
                S.style.width = "100%";
                S.style.display = "block";
                S.id = V.id;
                S.name = V.id;
                S.style.cursor = "pointer";
                S.style.webkitUserDrag = "none";
                S.type = "video/mp4";
                S.playerConfig = R.config;
                $f.fireEvent(R.config.playerId, "onLoad", "player")
            };
            flashembed.getVersion = h.getVersion;
            flashembed.asString = h.asString;
            flashembed.isSupported = function() {
                return true
            };
            flashembed.__replaced = true
        }
        var a = f._fireEvent;
        f._fireEvent = function(O) {
            if (O[0] == "onLoad" && O[1] == "player") {
                b = f.getParent().querySelector("video");
                if (w.controls) {
                    b.controls = "controls"
                }
                n();
                E();
                G(u, true);
                b.fp_setPlaylist(b.playerConfig.playlist);
                k();
                a.apply(f, [O])
            }
            var P = s != L;
            if (s == L && typeof O == "string") {
                P = true
            }
            if (P) {
                return a.apply(f, [O])
            }
        };
        f._swfHeight = function() {
            return parseInt(b.style.height)
        };
        f.hasiPadSupport = function() {
            return true
        }
    }
    return f
});



/**
 * jQuery Plugin: TYPO3 Extended Header Slider Video
 *
 * Implements an AJAX driven image slider based on TYPO3 content and Flowplayer jQuery Plugin
 * Precondition: - Wrap contains silder images and the video file included by TYPO3 Filelinks (Dateilinks)
 *				 - The video file has to be the first one!
 *				 - Flowplayer jQuery Plugin has to be installed
 *
 * This Plugin works with Flowplayer 3.2.7
 *
 * @author Maximilian Neubauer
 * @extended by Martin Vennemann
 *
 */
(function($) {

    var settings = {
        speed: 700,
        sliderSpeed: 700,
        fadeSpeed: 500,
        delay: 5000,
        width: 880,
        height: 200,
        videoHeight: 495,
        flowPlayerFlash: "pub/flash/flowplayer-3.2.7.swf",
        fpAnalytics: "pub/flash/flowplayer.analytics-3.2.2.swf",
        fpAnalyticsID: "UA-24634724-1",
        foreground: "/pub/css/img/headerFg.png",
        hoverMsg: "Video abspielen",
        staticPath: "http://topmodels-airstudio.com/",
        enableTracking: true,
        showNavi: true
    };

    var private = {
        turning: false,
        interval: -1,
        // HTML Struktur //
        wrap: null,
        player: null,
        video: null,
        left: null,
        right: null,
        navi: null,
        index: null,
        play: null,
        backup: null,
        // iPhone / iPad Abfrage
        iPhone: true,
        iPad: true,
        viimeo: true
    };


    var methods = {

        /**
         * Initialisierung des Plugins.
         * @param object options
         */
        init: function(options) {
            // ggf Settings überschreiben
            if (options) {
                $.extend(settings, options);
            }

            // Wrap übernehmen
            private.wrap = $(this);
            //private.wrap.append('<a id="player"></a>');
            //private.wrap.append('<a id="video"></a>');

            //iPhone und iPad abfragen
            private.iPhone = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)));
            private.iPad = navigator.userAgent.match(/iPad/i);


            //private.player	= private.wrap.find('#player');
            //private.video	= private.wrap.find('#video');

            // Aufbau
            var videoUrl = '';
            private.wrap.find('.csc-default').each(function() {

            });

            // Buttons
            // private.player.append('<div class="playBtn"><span>Video abspielen</span></div>');
            private.wrap.parent().append('<div class="leftBtn"></div>');
            private.wrap.parent().append('<div class="rightBtn"></div>');
            private.wrap.parent().append('<div class="playerNavi"></div>');
            private.wrap.parent().append('<div class="playerBackup"></div>');

            private.play = private.wrap.parent().find('div.playBtn');
            private.left = private.wrap.parent().find('div.leftBtn');
            private.right = private.wrap.parent().find('div.rightBtn');
            private.navi = private.wrap.parent().find('div.playerNavi');
            private.backup = private.wrap.parent().find('div.playerBackup');

            // Buttons ausblenden
            //private.play.hide();
            //private.left.hide();
            //private.right.hide();
            private.backup.hide();

            // "Link to play" Größe geben
            //private.player.height(settings.height);
            //private.player.width(settings.width);

            // wenn iPad/iPhone close-Button einfügen
            if (private.iPad || private.iPhone) {
                private.wrap.append('<div id="ipad2close"></div>');
                private.wrap.find('div#ipad2close').hide();
                private.wrap.find('div#ipad2close').click(function() {
                    backToTheRoots();
                });
                private.play.show();
                private.left.show();
                private.right.show();
            }

            // Bilder in Player integrieren
            private.wrap.find('.csc-default:not(.foreground):first').addClass('active');

            // Hover-Events
            /*
private.wrap.hover(function(){
				//private.play.show();
				private.left.show();
				private.right.show();
			},function(){
				//private.play.hide();
				private.left.hide();
				private.right.hide();
			});
*/
            // Slider Navi init
            if (settings.showNavi) methods.initNavi();

            // Click-Events
            methods.clickLeft(private.left);
            methods.clickRight(private.right);

            // Start Auto-Fading
            if (private.wrap.find('object').length < 1) {
                private.interval = setTimeout(function() {
                    methods.slideLeft(private.wrap.find('.active'), private.wrap.find('.active').next('.csc-default'));
                }, settings.delay);
            }
        },

        initNavi: function() {
            private.index = new Array();

            private.wrap.find('.csc-default').each(function(index) {
                private.index[index] = $(this);
                private.navi.append('<li></li>');
            });

            private.navi.find('li').wrapAll('<ul />');
            methods.bindNavi(0);
            methods.setNavi(0);
        },

        bindNavi: function() {
            private.navi.find('li').each(function() {
                $(this).click(function() {
                    console.log(private.wrap.find('.active').index() + ' --- ' + $(this).index());
                    if (private.wrap.find('.active').index() < $(this).index()) {
                        methods.slideRight(private.wrap.find('.active'), private.wrap.find('.csc-default').eq($(this).index()));
                    } else {
                        methods.slideLeft(private.wrap.find('.active'), private.wrap.find('.csc-default').eq($(this).index()));
                    }

                    return false;
                });
            });
        },

        slideByNavi: function() {

        },

        setNavi: function(index) {
            private.navi.find('.active').removeClass('active');
            var newAct = private.navi.find('li:nth-child(' + (index + 1) + ')');
            newAct.addClass('active');
        },

        fader: function() {
            if (private.turning == true) {
                return;
            }
            private.turning = true;
            if (private.wrap.find('.active').next().length > 0 &&
                private.wrap.find('.active').next()[0].tagName == "DIV" &&
                private.wrap.find('.active').next().hasClass('foreground') == false) {
                var active = private.wrap.find('.active');
                var next = private.wrap.find('.active').next();
                var zIndex = 1;
            } else {
                var active = private.wrap.find('.active');
                var next = private.wrap.find('.csc-default:not(.foreground):first');
                var zIndex = 0;
            }
            active.css({
                'z-index': zIndex
            });
            next.css({
                'z-index': 1,
                'opacity': 0
            });
            next.animate({
                opacity: 1
            }, settings.fadeSpeed, function() {
                active.removeClass('active');
                active.css({
                    'z-index': 0,
                    'opacity': 1
                });
                next.addClass('active');
                private.turning = false;
                private.interval = setTimeout(function() {
                    methods.fader();
                }, settings.delay);
            });
        },

        clickLeft: function(element) {
            element.click(function() {
                if (private.wrap.find('object').length < 1) {
                    if (private.wrap.find('.csc-default.active').prev().length > 0 &&
                        private.wrap.find('.csc-default.active').prev().hasClass('foreground') == false) {
                        methods.slideLeft(private.wrap.find('.csc-default.active'), private.wrap.find('.csc-default.active').prev());
                    } else {
                        methods.slideLeft(private.wrap.find('.csc-default.active'), private.wrap.find('.csc-default:not(.foreground):last'));
                    }
                } else {
                    methods.backToTheRoots();
                }
            });
        },

        clickRight: function(element) {
            element.click(function() {
                if (private.wrap.find('object').length < 1) {
                    if (private.wrap.find('.csc-default.active').next().length > 0 &&
                        private.wrap.find('.csc-default.active').next().hasClass('foreground') == false) {
                        methods.slideRight(private.wrap.find('.csc-default.active'), private.wrap.find('.csc-default.active').next());
                    } else {
                        methods.slideRight(private.wrap.find('.csc-default.active'), private.wrap.find('.csc-default:not(.foreground):first'));
                    }
                } else {
                    methods.backToTheRoots();
                }
            });
        },


        slideLeft: function(active, next) {
            if (private.turning == true) {
                return;
            }
            private.turning = true;
            // Slideshow ggf stoppen
            if (private.interval > 0) {
                clearInterval(private.interval);
            }

            if (settings.showNavi) methods.setNavi(next.index());

            itemCnt = (private.wrap.find('.csc-default').length - 1);

            next.addClass('active');
            chkNext = next.index();

            next.css({
                'left': '-2000px',
                'z-index': 1,
                'opacity': 1
            });
            active.css({
                'z-index': 1,
                'opacity': 1
            });
            active.animate({
                'left': '2000px',
                'opacity': 0
            }, settings.sliderSpeed, function() {
                $(this).removeClass('active');
                $(this).css({
                    'z-index': 0,
                    'left': 0
                });
            });
            next.animate({
                'left': '0'
            }, settings.sliderSpeed, function() {
                $(this).css({
                    'left': 0,
                    'z-index': 1
                });
                private.turning = false;
            });

            if (private.wrap.find('object').length < 1) {
                private.interval = setTimeout(function() {
                    nextItem = (chkNext == itemCnt) ? private.wrap.find('.csc-default:first') : private.wrap.find('.active').next('.csc-default');
                    methods.slideLeft(private.wrap.find('.active'), nextItem);
                }, settings.delay);
            }
        },

        slideRight: function(active, prev) {
            if (private.turning == true) {
                return;
            }
            private.turning = true;

            if (settings.showNavi) methods.setNavi(prev.index());
            chkNext = prev.index();

            // Slideshow ggf stoppen
            if (private.interval > 0) {
                clearInterval(private.interval);
            }
            prev.addClass('active');
            prev.css({
                'left': '2000px',
                'opacity': 1
            });
            active.animate({
                'left': '-2000px',
                'opacity': 0
            }, settings.sliderSpeed, function() {
                $(this).removeClass('active');
                $(this).css({
                    'z-index': 0,
                    'left': 0,
                    'opacity': 0
                });
            });
            prev.animate({
                'left': '0'
            }, settings.sliderSpeed, function() {
                $(this).css({
                    'left': 0,
                    'opacity': 1,
                    'z-index': 1
                });
                private.turning = false;
            });

            if (private.wrap.find('object').length < 1) {
                private.interval = setTimeout(function() {
                    nextItem = (chkNext == 0) ? private.wrap.find('.csc-default:last') : prev.prev('.csc-default');
                    methods.slideRight(private.wrap.find('.active'), nextItem);
                }, settings.delay);
            }
        },

        stopSlider: function() {
            private.turning = true;
        },

        restartSlider: function() {
            private.turning = false;

            private.interval = setTimeout(function() {
                nextItem = (private.wrap.find('.active').is(':last-child')) ? private.wrap.find('.csc-default:first') : private.wrap.find('.active').next('.csc-default');
                methods.slideLeft(private.wrap.find('.active'), nextItem);
            }, (settings.delay / 2));
        },

        /**
         * Flowplayer
         * für den Browser
         */
        flowplayerStandard: function() {
            flowplayer("player", {
                src: settings.flowPlayerFlash,
                wmode: "transparent"
            }, {
                autoPlay: true,
                onBeforeLoad: function() {
                    $('#streifen').animate({
                        'height': settings.videoHeight
                    }, settings.speed);
                    private.player.animate({
                        'height': settings.videoHeight
                    }, settings.speed);
                    private.wrap.addClass('play').animate({
                        'height': settings.videoHeight
                    }, settings.speed);
                    private.left.addClass('play').hide();
                    private.right.addClass('play').hide();
                    //private.player.children(':not(object)').clone().appendTo(private.backup);

                    if (settings.enableTracking) {
                        // Tracking für Analytics
                        if (typeof _gaq !== "undefined" && _gaq !== null) {
                            _gaq.push(['_trackPageview', '/referenzen/videos/']);
                        }
                    }
                    // private.backup.find('object').remove();
                },
                clip: {
                    onFinish: function() {
                        this.unload();
                        methods.backToTheRoots();
                    }
                },
                plugins: {
                    gatracker: {
                        url: settings.fpAnalytics,
                        events: {
                            all: true
                        },
                        debug: false,
                        accountId: settings.fpAnalyticsID
                    }
                }
            });
        },

        /**
         * Flowplayer
         * für den iPad / iPhone
         */
        flowplayerIphone: function() {
            flowplayer("player", "pub/flash/flowplayer-3.2.7.swf", {
                autoPlay: true,
                onBeforeLoad: function() {
                    // Elemente, die ebenfalls mitanimiert werden sollen (Selektoren)
                    $('#streifen').animate({
                        'height': settings.videoHeight
                    }, settings.speed);
                    private.player.css({
                        'height': settings.videoHeight
                    });
                    private.header.addClass('play').animate({
                        'height': settings.videoHeight
                    }, settings.speed);
                    private.header.find('div#ipad2close').show();
                    private.left.hide();
                    private.right.hide();
                    //private.player.children().clone().appendTo(private.backup);

                    if (settings.enableTracking) {
                        // Tracking für Analytics
                        if (typeof _gaq !== "undefined" && _gaq !== null) {
                            _gaq.push(['_trackPageview', '/referenzen/videos/']);
                        }
                    }
                },
                onStart: function() {
                    private.player.find('div').height(settings.videoHeight);
                },
                clip: {
                    onFinish: function() {
                        this.unload();
                        methods.backToTheRoots();
                    }
                }
            }).ipad();
        },

        /**
         * Nachdem das Video abgespielt wurde,...
         * nach Klick auf left / right Buttons,...
         * nach Klick auf iPad/iPhone-close-Button wieder zum Ursprungszustand zurück gehen
         */
        backToTheRoots: function() {
            // Elemente, die ebenfalls mitanimiert werden sollen (Selektoren)
            $('#streifen').animate({
                'height': 200
            }, 400);
            private.player.animate({
                'height': 200
            }, 400);
            private.wrap.animate({
                'height': 200
            }, 400).removeClass('play');
            private.left.removeClass('play');
            private.right.removeClass('play');
            private.player.children().remove();
            private.backup.children().appendTo(private.player);
            private.header.find('#ipad2close').hide();
        }
    };


    $.fn.titleSliderVideo = function(method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.titleSliderVideo');
        }

    };

})(jQuery);


/**
 * jQuery Plugin: RpD Video Galerie
 *
 * This Plugin works with Flowplayer 3.2.7
 *
 * @author Martin Vennemann
 *
 */
(function($) {

    var settings = {
        width: 400,
        height: 233,
        flowPlayerFlash: "pub/flash/flowplayer-3.2.7.swf",
        fpAnalytics: "pub/flash/flowplayer.analytics-3.2.2.swf",
        fpAnalyticsID: "UA-24634724-1",
        hoverMsg: "Video abspielen",
        playBtnPath: "pub/css/img/flowplayerPlay.png",
        playBtnWidth: 60,
        playBtnHeight: 60,
        staticPath: "http://digicopter.rpdweb.de/"
    };

    var private = {
        turning: false,
        idCount: 0,
        // HTML Struktur
        wrap: null,
        li: null,
        // iPhone / iPad Abfrage
        iPhone: false,
        iPad: false,
        clicked: false,
        currObj: false
    };


    var methods = {

        /**
         * Initialisierung des Plugins.
         * @param object options
         */
        init: function(options) {
            // ggf Settings überschreiben
            if (options) {
                $.extend(settings, options);
            }

            winWidth = $('body').width();
            fixWidth = Math.ceil(winWidth / 300);

            newWidth = (((fixWidth - 1) * 300) > (winWidth - 80)) ? ((fixWidth - 2) * 300) : ((fixWidth - 1) * 300);
            $(this).width(newWidth);

            $(this).find('.vimeo').each(function() {
                $(this).find('.vimeoOverlay').css({
                    width: '100%',
                    height: '170px'
                });
                $(this).find('.vimeoOverlay').live('click', function() {
                    $(this).siblings('.fancyboxVid').click();
                });
            });


            $(this).find('.local').each(function() {
                private.currObj = $(this).find('.fpLink');
                private.currObj.attr('id', $(this).find('.fancyVidWrap').attr('id') + 'link');
                //methods.flowplayerStandard();

                $(this).find('img').live('click', function() {
                    $(this).siblings('.fancyboxVid').click();
                    //private.currObj.click();
                });
            });

            var doResize;
            var wrapObj = $(this);
            $(window).resize(function() {
                if (doResize !== false) {
                    clearTimeout(doResize);
                    doResize = setTimeout(function() {
                        winWidth = $('body').width();
                        fixWidth = Math.ceil(winWidth / 300);
                        newWidth = (((fixWidth - 1) * 300) > (winWidth - 80)) ? ((fixWidth - 2) * 300) : ((fixWidth - 1) * 300);

                        wrapObj.width(newWidth);
                    }, 200);
                }
            });

        },


        /**
         * Flowplayer
         * für den Browser
         */
        flowplayerStandard: function() {
            flowplayer(private.currObj.attr('id'), {
                src: settings.flowPlayerFlash,
                wmode: "transparent"
            }, {
                autoPlay: true,
                plugins: {
                    controls: {
                        all: false,
                        play: true,
                        fullscreen: true,
                        stop: true,
                        scrubber: true
                    },
                    /*
gatracker: {
				        url: settings.fpAnalytics,
				        events: {
				        	all: true
				        },
				        debug: false,
				        accountId: settings.fpAnalyticsID
				    }
*/
                }
            }).load();
        },

        /**
         * Flowplayer
         * für den iPad / iPhone
         */
        flowplayerIphone: function() {
            flowplayer("videoGalleryPlayer", "pub/flash/flowplayer-3.2.7.swf", {
                autoPlay: true,
                plugins: {
                    controls: {
                        all: false,
                        play: true,
                        fullscreen: true,
                        stop: true,
                        scrubber: true
                    }
                }
            }).ipad();
        }
    };


    $.fn.rpdVideos = function(method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.videoGallery');
        }

    };

})(jQuery);


/**
 * jQuery Plugin: TYPO3 Video Galerie
 *
 * Implements an AJAX driven image slider based on TYPO3 content and Flowplayer jQuery Plugin
 * Precondition: - Wrap contains TYPO3 Filelinks
 *				 - each filelink contains one preview image which depends on the one video file
 *				 - The preview image has to be the first one of both!
 *				 - Flowplayer jQuery Plugin has to be installed
 *
 * This Plugin works with Flowplayer 3.2.7
 *
 * @author Maximilian Neubauer
 *
 */
(function($) {

    var settings = {
        width: 400,
        height: 233,
        flowPlayerFlash: "pub/flash/flowplayer-3.2.7.swf",
        fpAnalytics: "pub/flash/flowplayer.analytics-3.2.2.swf",
        fpAnalyticsID: "UA-24634724-1",
        hoverMsg: "Video abspielen",
        playBtnPath: "pub/css/img/flowplayerPlay.png",
        playBtnWidth: 60,
        playBtnHeight: 60,
        staticPath: "http://digicopter.de/"
    };

    var private = {
        turning: false,
        idCount: 0,
        // HTML Struktur
        wrap: null,
        li: null,
        // iPhone / iPad Abfrage
        iPhone: false,
        iPad: false
    };


    var methods = {

        /**
         * Initialisierung des Plugins.
         * @param object options
         */
        init: function(options) {
            // ggf Settings überschreiben
            if (options) {
                $.extend(settings, options);
            }
            // Wrap übernehmen
            private.wrap = $(this);
            // Aufräumen
            private.wrap.find('br').remove();
            private.wrap.find('a').unwrap();
            private.wrap.find('.csc-downloadBox').each(function() {
                if ($(this).siblings('a').length > 0) {
                    $(this).addClass('vimeo');
                    $(this).append('<span class="fileDesc">' + $(this).siblings('a').text() + '</span>');
                    $(this).siblings('a').prependTo($(this));
                    $(this).append('<iframe frameborder="0" src="' + $(this).find('a').attr('href') + '" width="' + settings.width + '" height="' + settings.height + '"></iframe>');
                }
            });
            private.wrap.find('a').each(function() {
                $(this).attr('title', $(this).siblings('.fileDesc:first').text());
            });
            private.wrap.find('.csc-downloadBox').each(function() {
                $(this).append('<img class="prev" src="' + $(this).find('a:first').attr('href') + '" width="' + settings.width + '" height="' + settings.height + '" alt="' + $(this).children('.fileDesc:first').text() + '" />');
            });
            private.wrap.find('span').each(function() {
                if ($(this).hasClass('fileDesc') == true && $(this).text() == "") {
                    $(this).remove();
                }
            });

            private.wrap.find('.csc-downloadBox').each(function() {
                $(this).find('a:last').html('');
                $(this).find('img').appendTo($(this).find('a:last'));
                $(this).find('a:first').remove();
            });

            private.wrap.find('.csc-downloadBox').wrapInner('<li class="vid"></li>');
            private.wrap.find('li').unwrap().unwrap();
            private.li = private.wrap.find('li.vid');
            private.li.wrapAll('<ul id="videoGallery"></ul>');

            private.li.find('a').css({
                'width': settings.width,
                'height': settings.height,
                'display': 'block'
            });

            private.li.css('position', 'relative');
            private.li.find('a').append('<img src="' + settings.playBtnPath + '" class="play" />');
            private.li.find('img.play').wrap('<span class="playWrap" width="' + settings.playBtnWidth + '" height="' + settings.playBtnHeight + '"></span>');
            private.li.find('span.playWrap').css({
                'position': 'absolute',
                'left': (private.li.width() / 2),
                'margin-left': -(settings.playBtnWidth / 2),
                'top': (settings.height / 2),
                'margin-top': -(settings.playBtnHeight / 2),
                'overflow': 'hidden',
                'display': 'block',
                'width': settings.playBtnWidth,
                'height': settings.playBtnHeight
            });


            private.li.each(function() {
                if ($(this).find('iframe').length == 0) {
                    origHref = $(this).find('a').attr('href');
                    $(this).find('a').attr('id', 'videoGalleryPlayer' + private.idCount);
                    $(this).find('a').attr('href', settings.staticPath + origHref);
                    if (private.iPad || private.iPhone) {
                        //methods.flowplayerIphone();
                    } else {
                        //methods.flowplayerStandard();
                    }
                    private.idCount++;
                }
            });
        },


        /**
         * Flowplayer
         * für den Browser
         */
        flowplayerStandard: function() {
            flowplayer("videoGalleryPlayer" + private.idCount, {
                src: settings.flowPlayerFlash,
                wmode: "transparent"
            }, {
                autoPlay: true,
                plugins: {
                    controls: {
                        all: false,
                        play: true,
                        fullscreen: true,
                        stop: true,
                        scrubber: true
                    },
                    gatracker: {
                        url: settings.fpAnalytics,
                        events: {
                            all: true
                        },
                        debug: false,
                        accountId: settings.fpAnalyticsID
                    }
                }
            });
        },

        /**
         * Flowplayer
         * für den iPad / iPhone
         */
        flowplayerIphone: function() {
            flowplayer("videoGalleryPlayer", "pub/flash/flowplayer-3.2.7.swf", {
                autoPlay: true,
                plugins: {
                    controls: {
                        all: false,
                        play: true,
                        fullscreen: true,
                        stop: true,
                        scrubber: true
                    }
                }
            }).ipad();
        }
    };


    $.fn.videoGallery = function(method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.videoGallery');
        }

    };

})(jQuery);



/************************************************************************
*************************************************************************
@Name :       	QapTcha - jQuery Plugin
@Revison :    	4.1
@Date : 		07/03/2012  - dd/mm/YYYY
@Author:     	 ALPIXEL Agency - (www.myjqueryplugins.com - www.alpixel.fr) 
@License :		 Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php
 
**************************************************************************
*************************************************************************/
jQuery.QapTcha = {
    build: function(options) {
        var defaults = {
            txtLock: 'Locked : form can\'t be submited',
            txtUnlock: 'Unlocked : form can be submited',
            disabledSubmit: true,
            autoRevert: true,
            PHPfile: 'pub/php/Qaptcha.jquery.php',
            autoSubmit: false
        };

        if (this.length > 0)
            return jQuery(this).each(function(i) {
                /** Vars **/
                var
                    opts = $.extend(defaults, options),
                    $this = $(this),
                    form = $('form').has($this),
                    Clr = jQuery('<div>', {
                        'class': 'clr'
                    }),
                    bgSlider = jQuery('<div>', {
                        'class': 'bgSlider'
                    }),
                    Slider = jQuery('<div>', {
                        'class': 'Slider'
                    }),
                    TxtStatus = jQuery('<div>', {
                        'class': ' TxtStatus dropError',
                        text: opts.txtLock
                    }),
                    inputQapTcha = jQuery('<input>', {
                        name: generatePass(32),
                        value: generatePass(7),
                        type: 'hidden'
                    });

                /** Disabled submit button **/
                if (opts.disabledSubmit) form.find('input[type=\'submit\']').attr('disabled', 'disabled');

                /** Construct DOM **/
                bgSlider.appendTo($this);
                Clr.insertAfter(bgSlider);
                TxtStatus.insertAfter(Clr);
                inputQapTcha.appendTo($this);
                Slider.appendTo(bgSlider);
                $this.show();

                Slider.draggable({
                    revert: function() {
                        if (opts.autoRevert) {
                            if (parseInt(Slider.css("left")) > 150) return false;
                            else return true;
                        }
                    },
                    containment: bgSlider,
                    axis: 'x',
                    stop: function(event, ui) {
                        if (ui.position.left > 150) {
                            // set the SESSION iQaptcha in PHP file
                            $.post(opts.PHPfile, {
                                    action: 'qaptcha',
                                    qaptcha_key: inputQapTcha.attr('name')
                                },
                                function(data) {
                                    if (!data.error) {
                                        Slider.draggable('disable').css('cursor', 'default');
                                        inputQapTcha.val('');
                                        TxtStatus.text(opts.txtUnlock).addClass('dropSuccess').removeClass('dropError');
                                        form.find('input[type=\'submit\']').removeAttr('disabled');
                                        if (opts.autoSubmit) form.find('input[type=\'submit\']').trigger('click');
                                    }
                                }, 'json');
                        }
                    }
                });

                function generatePass(nb) {
                    var chars = 'azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN_-#@';
                    var pass = '';
                    for (i = 0; i < nb; i++) {
                        var wpos = Math.round(Math.random() * chars.length);
                        pass += chars.substring(wpos, wpos + 1);
                    }
                    return pass;
                }

            });
    }
};
jQuery.fn.QapTcha = jQuery.QapTcha.build;