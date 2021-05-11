import withAsyncHandler from "../../lib/withAsyncHandler";
import completeOAuth from "./completeOAuth";

const AuthController = { completeOAuth };

export default withAsyncHandler(AuthController);
