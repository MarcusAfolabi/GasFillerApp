"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _presentation = require("./presentation");

var Nav = _presentation.Nav;
var Footer = _presentation.Footer;
var Item = _presentation.Item;
var Map = _presentation.Map;
var Home = (function (Component) {
    function Home() {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this);
        this.state = {
            map: null
        };
    }

    _inherits(Home, Component);

    _prototypeProperties(Home, null, {
        render: {
            value: function render() {
                var _this = this;
                var markers = [{ id: 1, key: "1", defaultAnimation: 2, label: "Total Gas Filling Station", position: { lat: 6.5291228, lng: 3.2507272 } }, { id: 2, key: "2", defaultAnimation: 2, label: "Oando Gas Filling Station", position: { lat: 6.5134438, lng: 3.2475515 } }, { id: 3, key: "3", defaultAnimation: 2, label: "NNPC Gas Filling Station", position: { lat: 6.6090813, lng: 3.2843326 } }, { id: 4, key: "4", defaultAnimation: 2, label: "Oando Gas Filling Station", position: { lat: 6.5307347, lng: 3.2828577 } }, { id: 5, key: "5", defaultAnimation: 2, label: "MRS Gas Filling Station", position: { lat: 6.5124631, lng: 3.2787711 } }, { id: 6, key: "6", defaultAnimation: 2, label: "MRS Gas Filling Station", position: { lat: 6.5101126, lng: 3.291358 } }, { id: 7, key: "7", defaultAnimation: 2, label: "Conoil Gas Filling Station", position: { lat: 6.5075298, lng: 3.2930413 } }, { id: 8, key: "8", defaultAnimation: 2, label: "MRS Gas Filling Station", position: { lat: 6.5062752, lng: 3.3074624 } }, { id: 9, key: "9", defaultAnimation: 2, label: "Oando Gas Filling Station", position: { lat: 6.613641, lng: 3.2583028 } }, { id: 10, key: "10", defaultAnimation: 2, label: "Oando Gas Filling Station", position: { lat: 6.5120571, lng: 3.2892032 } }, { id: 11, key: "11", defaultAnimation: 2, label: "Oando Gas Filling Station", position: { lat: 6.4429131, lng: 3.3516216 } }, { id: 12, key: "12", defaultAnimation: 2, label: "Oando Gas Filling Station", position: { lat: 6.5134438, lng: 3.2475515 } }, { id: 13, key: "13", defaultAnimation: 2, label: "Forte Gas Filling Station", position: { lat: 6.4438992, lng: 3.3566779 } }, { id: 14, key: "14", defaultAnimation: 2, label: "NPPC Gas Filling Station Isheri", position: { lat: 6.534994, lng: 3.2353529 } }, { id: 15, key: "15", defaultAnimation: 2, label: "Total Gas Filling Station", position: { lat: 6.4538655, lng: 3.3331237 } }, { id: 16, key: "16", defaultAnimation: 2, label: "Mobile Gas Filling Station Apapa", position: { lat: 6.5386857, lng: 3.2847987 } }];

                return React.createElement(
                    "div",
                    { className: "wrapper" },
                    React.createElement(
                        "div",
                        { className: "sidebar", "data-background-color": "white", "data-active-color": "danger" },
                        React.createElement(
                            "div",
                            { className: "sidebar-wrapper", style: { height: 960 } },
                            React.createElement(Map, {
                                onMapReady: function (map) {
                                    if (_this.state.map != null) return;

                                    _this.setState({
                                        map: map
                                    });
                                },
                                markers: markers,
                                zoom: 14,
                                center: { lat: 6.5291228, lng: 3.2507272 },
                                containerElement: React.createElement("div", { style: { height: 100 + "%" } }),
                                mapElement: React.createElement("div", { style: { height: 100 + "%" } }) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "main-panel" },
                        React.createElement(Nav, null),
                        React.createElement(
                            "div",
                            { className: "content" },
                            React.createElement(
                                "div",
                                { className: "container-fluid" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(Item, null),
                                    React.createElement(Item, null),
                                    React.createElement(Item, null),
                                    React.createElement(Item, null)
                                )
                            )
                        ),
                        React.createElement(Footer, null)
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Home;
})(Component);

module.exports = Home;
//console.log('onMapReady: '+JSON.stringify(map.getCenter()))