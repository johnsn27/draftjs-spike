import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class RichTextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createWithText("Google employees in the US who opt to work from home permanently may get a pay cut. The technology giant has developed a pay calculator that lets employees see the effects of working remotely or moving offices. Some remote employees, especially those with a long commute, could have their pay cut without changing address. Google has no plans at this time to implement the policy in the UK. Employees in many businesses have proved that working from home permanently is viable during the Covid pandemic. Many companies are looking ahead to how employees will work as the pandemic recedes, even as the US continues to battle the Delta variant of the disease. Silicon Valley firms, some of which are keen to get employees back to their desks, are experimenting with employee pay structures. Big tech companies including Microsoft, Facebook, and Twitter have offered less pay for employees based in locations where it is more inexpensive to live. But smaller firms such as Reddit and Zillow have said they will pay the same no matter where employees are based, saying that this improves diversity.")
		};
	}

	onChange = editorState => {
		this.setState({
			editorState
		});
	};

	handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(
			this.state.editorState,
			command
		);
		if (newState) {
			this.onChange(newState);
			return "handled";
		}
		return "not-handled";
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
	};

	render() {
		return (
			<div className="editorContainer">
				<button onClick={this.onBoldClick} label="bold">
					<b>B</b>
				</button>
				<button onClick={this.onItalicClick} label="italic">
					<em>I</em>
				</button>
				<div className="editors">
					<Editor
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
					/>
				</div>
			</div>
		);
	}
}

export default RichTextEditor;
