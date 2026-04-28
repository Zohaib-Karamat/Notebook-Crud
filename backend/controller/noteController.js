import note from "../model/notemodel.js";

export const create = async (req, res) => {
    try {
        const newNote = note(req.body)
        const { id } = newNote;
        const idExists = await note.findOne({ id })
        if (idExists) {
            return res.status(400).json({ message: "Note already exists." })
        }

        const savedNote = await newNote.save();
        res.status(200).json({ message: "Note successfully saved." })
    } catch (error) {
        res.status(500).json(error)
    }
}


export const read = async (req, res) => {
    const allNotes = await note.find();
    if (allNotes.length == 0 || !allNotes) {
        return res.status(400).json({ message: "Data not found!" })
    }
    return res.status(200).json(allNotes);
}


export const readById = async (req, res) => {
    const id = req.params.id;
    const noteData = await note.findOne({ id: id });
    if (!noteData) {
        return res.status(400).json({ message: "Note does not exist." })
    }
    return res.status(200).json(noteData);

}

export const deleteById = async (req, res) => {
    const id = req.params.id;
    const noteData = await note.findOne({ id: id });
    if (!noteData) {
        return res.status(400).json({ message: "Note does not exist." })
    }
    const deletedData = await note.findOneAndDelete(id);
    return res.status(200).json(deletedData);

}


export const updateById = async (req, res) => {
    const id = req.params.id;
    const noteData = await note.findOne({ id: id });
    if (!noteData) {
        return res.status(400).json({ message: "Note does not exist." })
    }
    const updatedData = await note.findOneAndReplace(
        { id: id },
        req.body,
        { new: true }
    );
    return res.status(200).json(updatedData);

}