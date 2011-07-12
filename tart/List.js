// Copyright 2011 Tart. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview tart.List to handle List typed data structures extended from tart.Collection.
 */

goog.provide('tart.List');

goog.require('tart.Collection');



/**
 * List data structure
 *
 * @extends {tart.Collection}
 * @constructor
 */
tart.List = function() {
    goog.base(this);

    /** @private **/
    this.keyCount_ = 0;
};
goog.inherits(tart.List, tart.Collection);


/**
 * Adds a new item to list .
 *
 * @param {*} value Value for the pair.
 * @return {boolean} .
 */
tart.List.prototype.addItem = function(value) {
    return tart.Collection.prototype.addItem.call(this, this.keyCount_++, value);
};
