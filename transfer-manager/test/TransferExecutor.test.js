const TransferExecutorTest = artifacts.require("TransferExecutorTest.sol");
const TransferProxyTest = artifacts.require("TransferProxyTest.sol");
const ERC20TransferProxyTest = artifacts.require("ERC20TransferProxyTest.sol");

const TestERC20 = artifacts.require("TestERC20.sol");
const TestERC20ZRX = artifacts.require("TestERC20ZRX.sol");
const TestERC721 = artifacts.require("TestERC721.sol");
const TestERC1155 = artifacts.require("TestERC1155.sol");

const order = require("../../scripts/order.js");
const ZERO = "0x0000000000000000000000000000000000000000";
const tests = require("@daonomic/tests-common");
const expectThrow = tests.expectThrow;
const { verifyBalanceChangeReturnTx } = require("../../scripts/balance")
const { ETH, ERC20, ERC721, ERC1155, enc } = require("../../scripts/assets.js");

contract("TransferExecutor", accounts => {
	let testing;
	let erc20Token;
	let erc20ZRXToken;
	let erc721Token;
	let erc1155Token;
	let transferProxy;
	let erc20TransferProxy;

	before(async () => {

		transferProxy = await TransferProxyTest.new();
		erc20TransferProxy = await ERC20TransferProxyTest.new();
		testing = await TransferExecutorTest.new();
		await testing.__TransferExecutorTest_init(transferProxy.address, erc20TransferProxy.address);
		erc20Token = await TestERC20.new();
		erc721Token = await TestERC721.new("Rarible", "RARI");
		erc1155Token = await TestERC1155.new();
		erc20ZRXToken = await TestERC20ZRX.new();
	});

	it("should support ETH transfers", async () => {
		await verifyBalanceChangeReturnTx(web3, accounts[0], 500, () =>
			verifyBalanceChangeReturnTx(web3, accounts[5], -500, () =>
    		testing.transferTest(order.Asset(ETH, "0x", 500), ZERO, accounts[5], { value: 500, from: accounts[0] })
    	)
		);
	})

	it("should support ERC20 transfers", async () => {
		await erc20Token.mint(accounts[5], 100);
		await erc20Token.approve(erc20TransferProxy.address, 100, { from: accounts[5] });

		await testing.transferTest(order.Asset(ERC20, enc(erc20Token.address), 40), accounts[5], accounts[6])
		assert.equal(await erc20Token.balanceOf(accounts[5]), 60);
		assert.equal(await erc20Token.balanceOf(accounts[6]), 40);
	})

	it("should support ERC20 ZRX kind tokens", async () => {
		await erc20ZRXToken.approve(erc20TransferProxy.address, 100, { from: accounts[0] });
		await testing.transferTest(order.Asset(ERC20, enc(erc20ZRXToken.address), 40), accounts[0], accounts[6])
		assert.equal(await erc20ZRXToken.balanceOf(accounts[6]), 40);
	})

	it("should support ERC721 transfers", async () => {
		await erc721Token.mint(accounts[5], 1);
		await erc721Token.setApprovalForAll(transferProxy.address, true, { from: accounts[5] });

		await expectThrow(
			testing.transferTest(order.Asset(ERC721, enc(erc721Token.address, 1), 2), accounts[5], accounts[6])
		)
		await testing.transferTest(order.Asset(ERC721, enc(erc721Token.address, 1), 1), accounts[5], accounts[6])
		assert.equal(await erc721Token.ownerOf(1), accounts[6]);
	})

	it("should support ERC1155 transfers", async () => {
		await erc1155Token.mint(accounts[5], 1, 100);
		await erc1155Token.setApprovalForAll(transferProxy.address, true, { from: accounts[5] });

		await testing.transferTest(order.Asset(ERC1155, enc(erc1155Token.address, 1), 40), accounts[5], accounts[6])
		assert.equal(await erc1155Token.balanceOf(accounts[5], 1), 60);
		assert.equal(await erc1155Token.balanceOf(accounts[6], 1), 40);
	})

});
