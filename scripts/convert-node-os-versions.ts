/** @license Apache-2.0
 *
 * Copyright 2024 8 Hobbies, LLC <hong@8hobbies.com>
 *
 * Licensed under the Apache License, Version 2.0(the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Convert inputs of Node versions and OS versions to the desired test matrix.
 *
 * For npm-runtime.yml workflow.
 */

interface Combination {
  nodeVersion: string;
  osVersion: string;
}

const args = process.argv.slice(2);

const nodeVersions = JSON.parse(args[0]);
const osVersions = JSON.parse(args[1]);

const result: Combination[] = [
  ...osVersions.map((osVersion) => ({
    nodeVersion: nodeVersions[0],
    osVersion,
  })),
  ...nodeVersions
    .slice(1)
    .map((nodeVersion) => ({ nodeVersion, osVersion: osVersions[0] })),
];

console.log(`value=${JSON.stringify(result)}`);
