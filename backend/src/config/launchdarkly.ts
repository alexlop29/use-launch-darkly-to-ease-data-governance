import * as ld from "@launchdarkly/node-server-sdk";
import { LAUNCH_DARKLY_SDK_KEY } from "./environment";

const client = ld.init(LAUNCH_DARKLY_SDK_KEY);

export { client };
