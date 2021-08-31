import { Router} from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin} from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimenteController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimenteController();
const listUserSendController = new ListUserSendComplimentsController();
const listUserReceiveController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController;
const listUserController = new ListUserController();

router.post ("/users", createUserController.handle)
router.post("/tags",ensureAuthenticate, ensureAdmin ,createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliment", ensureAuthenticate, complimentController.handle)
router.get("/users/compliments/send",ensureAuthenticate,listUserSendController.handle)
router.get("/users/compliments/receive",ensureAuthenticate,listUserReceiveController.handle)
router.get("/tags/List",listTagsController.handle )
router.get("/users",ensureAuthenticate, listUserController.handle)
export {router};