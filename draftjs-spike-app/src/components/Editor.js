import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class RichTextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty()
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
				<button onClick={this.onBoldClick}>
					<b>B</b>
				</button>
				<button onClick={this.onItalicClick}>
					<em>I</em>
				</button>
				<div className="editors">
					<Editor
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						// placeholder="Write something!"
					/>
				</div>
			</div>
		);
	}
}

export default RichTextEditor;
